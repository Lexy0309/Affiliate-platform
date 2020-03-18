import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader, CardBody } from "reactstrap";
import { Input, Icon, Table, Popconfirm, Modal } from "antd";
import Highlighter from "react-highlight-words";
import reqwest from "reqwest";
import {
  path_assessments,
  baseUrl,
  path_applicant,
  getData
} from "../../components/config/config";
import { Digest } from "../../containers/Helpers/digest";
import { multiLanguage } from "../../components/Language/getBahasa";

import "antd/dist/antd.css";
import "../../css/TableAntd.css";
import "../../css/loaderDataTable.css";
import Axios from "axios";

const Search = Input.Search;

type Props = {
  payloadDetail: any
};
export default class DetailAsesi extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pagination: {},
      loading: false,
      offset: 0,
      filteredInfo: null,
      searchText: "",
      runs: ""
    };
  }

  getColumnSearchProps = dataIndex => ({
    filterDropDown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searcInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.velue ? [e.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          {multiLanguage.search}
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          {multiLanguage.reset}
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searcInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    )
  });

  handleSearch = searchText => {
    const { assessment_id } = this.props.params;
    var url =
      baseUrl +
      path_assessments +
      "/" +
      assessment_id +
      path_applicant +
      "?search=" +
      searchText +
      "&assessor_id=0";
    this.setState({ loading: true });
    const auth = Digest(
      path_assessments + "/" + assessment_id + path_applicant,
      "GET"
    );
    reqwest({
      url: url,
      method: "GET",
      data: {
        limit: 10
      },
      contentType: "application/json",
      headers: {
        Authorization: auth.digest,
        "X-Lsp-Date": auth.date
      },
      type: "json"
    }).then(response => {
      const pagination = { ...this.state.pagination };
      const count = parseInt(response.count, 10);
      pagination.total = count;
      this.setState({
        loading: false,
        data: response.data,
        pagination
      });
    });
  };

  handleChange = event => {
    if (event.target.value === "") {
      this.get();
    }
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  get = (params = { assessor_id: "0" }) => {
    const { assessment_id } = this.props.params;
    console.log("assessment_id detail asesi", this.props);
    this.setState({ loading: true });
    const auth = Digest(
      path_assessments + "/" + assessment_id + path_applicant,
      "GET"
    );
    reqwest({
      url: baseUrl + path_assessments + "/" + assessment_id + path_applicant,
      method: "GET",
      data: {
        limit: 10,
        ...params
      },
      contentType: "application/json",
      headers: {
        Authorization: auth.digest,
        "X-Lsp-Date": auth.date
      },
      type: "json"
    })
      .then(response => {
        const pagination = { ...this.state.pagination };
        const count = parseInt(response.count, 10);
        pagination.total = count;
        this.setState({
          loading: false,
          data: response.data,
          pagination
        });
      })
      .catch(error => {
        if (error.status === 401) {
          localStorage.clear();
          window.location.replace("/login");
        } else if (error.status === 419) {
          this.errorTrial();
        }
      });
  };

  errorTrial = () => {
    Modal.error({
      title: "Pesan Error",
      content:
        "Masa trial anda telah habis,Harap menghubungi Admin NAS untuk info lebih lanjut",
      onOk() {
        localStorage.clear();
        window.location.replace("/login");
      }
    });
  };

  handleTableChange = (pagination, _filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    const offset = (pagination.current - 1) * pagination.pageSize;

    let sorting = "";
    switch (sorter.order) {
      case "ascend":
        sorting = sorter.field;
        break;

      case "descend":
        sorting = "-" + sorter.field;
        break;

      default:
        break;
    }
    this.get({
      limit: pagination.pageSize,
      offset: offset,
      sort: sorting
    });
  };

  componentDidMount() {
    const runs = this.props.run;
    this.get();
    this.setState({
      runs: runs
    });
  }

  handleDelete = value => {
    const { assessment_id } = this.props.params;
    this.setState({
      loading: true
    });

    Axios(
      getData(
        path_assessments + "/" + assessment_id + path_applicant + "/" + value,
        "DELETE"
      )
    ).then(() => {
      this.setState({
        loading: false
      });
      this.get();
    });
  };

  render() {
    const {
      last_activity_state,
      assessment_id,
      sub_schema_number
    } = this.props.payloadDetail;
    const columns = [
      {
        key: "first_name",
        title: (
          <h5 style={{ fontWeight: "bold", textAlign: "center" }}>
            {multiLanguage.name}
          </h5>
        ),
        dataIndex: "first_name",
        render: (value, row) => {
          console.log(row);
          const last_name = row.last_name !== "Undefined" ? row.last_name : "";
          const full = row.first_name + " " + last_name;
          return <div>{row.applicant_id !== "0" ? full : row.full_name}</div>;
        }
      },
      {
        key: "contact",
        title: (
          <h5 style={{ fontWeight: "bold", textAlign: "center" }}>
            {multiLanguage.contact}
          </h5>
        ),
        dataIndex: "contact",
        render: value => {
          return <div>{value}</div>;
        }
      },
      {
        key: "schema_label",
        title: (
          <h5 style={{ fontWeight: "bold", textAlign: "center" }}>
            {multiLanguage.schema} {multiLanguage.asesi}
          </h5>
        ),
        dataIndex: "schema_label",
        render: value => {
          return <div>{value}</div>;
        }
      },
      {
        key: "assessment_applicant_id",
        title: (
          <h5 style={{ fontWeight: "bold", textAlign: "center" }}>
            {multiLanguage.action}
          </h5>
        ),
        dataIndex: "assessment_applicant_id",
        render: (value, row) => {
          return (
            <div>
              <Link
                to={`${path_assessments}/${row.assessment_id}${path_applicant}/${value}/portofolio`}
              >
                <Button className="btn btn-success">
                  {multiLanguage.documentAsesi}
                </Button>
              </Link>{" "}
              <Popconfirm
                title={multiLanguage.confirmDelete}
                onConfirm={this.handleDelete.bind(this, value)}
                onCancel={this.cancel}
                okText={multiLanguage.yes}
                cancelText={multiLanguage.no}
              >
                <button
                  className="btn btn-danger delete-button col-md-auto"
                  title={multiLanguage.Delete}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </Popconfirm>
            </div>
          );
        }
      }
    ];
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader style={{ textAlign: "center" }}>
            {multiLanguage.list} Peserta
            {last_activity_state === "ADMIN_CONFIRM_FORM" ||
            last_activity_state === "ON_REVIEW_APPLICANT_DOCUMENT" ||
            last_activity_state === "ON_COMPLETED_REPORT" ? (
              <Link
                to={
                  path_assessments +
                  "/" +
                  assessment_id +
                  "/assign-applicant/" +
                  sub_schema_number +
                  "/" +
                  this.state.runs
                }
              >
                <Button className="float-md-right">
                  <i className="fa fa-plus" /> Assign Peserta
                </Button>
              </Link>
            ) : (
              ""
            )}
          </CardHeader>
          <CardBody>
            {`${multiLanguage.searching} `}
            <Search
              placeholder={multiLanguage.search}
              onSearch={this.handleSearch}
              onChange={this.handleChange}
              style={{ width: 310 }}
            />{" "}
            <p />
            <Table
              rowKey={record => record.assessment_applicant_id}
              columns={columns}
              dataSource={this.state.data}
              pagination={this.state.pagination}
              loading={this.state.loading}
              onChange={this.handleTableChange}
              stripe
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}
