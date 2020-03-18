import lang from "./dictionary";

const language = {};

language.MultiLanguageTitle = bahasa => {
  return {
    add: lang.dictionary[bahasa].add,
    Edit: lang.dictionary[bahasa].Edit,
    Delete: lang.dictionary[bahasa].Delete,
    user: lang.dictionary[bahasa].user,
    picture: lang.dictionary[bahasa].picture,
    firstName: lang.dictionary[bahasa].firstName,
    lastName: lang.dictionary[bahasa].lastName,
    role: lang.dictionary[bahasa].role,
    action: lang.dictionary[bahasa].action,
    alertField: lang.dictionary[bahasa].alertField,
    contact: lang.dictionary[bahasa].contact,
    gender: lang.dictionary[bahasa].gender,
    placeBirth: lang.dictionary[bahasa].placeBirth,
    dateOfBirth: lang.dictionary[bahasa].dateOfBirth,
    address: lang.dictionary[bahasa].address,
    NoCertificate: lang.dictionary[bahasa].NoCertificate,
    institute: lang.dictionary[bahasa].institute,
    name: lang.dictionary[bahasa].name,
    select: lang.dictionary[bahasa].select,
    selected: lang.dictionary[bahasa].selected,
    submit: lang.dictionary[bahasa].submit,
    cancel: lang.dictionary[bahasa].cancel,
    back: lang.dictionary[bahasa].back,
    male: lang.dictionary[bahasa].male,
    female: lang.dictionary[bahasa].female,
    change: lang.dictionary[bahasa].change,
    changeState: lang.dictionary[bahasa].changeState,
    alertDelete: lang.dictionary[bahasa].alertDelete,
    type: lang.dictionary[bahasa].type,
    expiredDate: lang.dictionary[bahasa].expiredDate,
    map: lang.dictionary[bahasa].map,
    description: lang.dictionary[bahasa].description,
    example: lang.dictionary[bahasa].example,
    search: lang.dictionary[bahasa].search,
    open: lang.dictionary[bahasa].open,
    newAddress: lang.dictionary[bahasa].newAddress,
    list: lang.dictionary[bahasa].list,
    competencePending: lang.dictionary[bahasa].competencePending,
    schedule: lang.dictionary[bahasa].schedule,
    mainSchema: lang.dictionary[bahasa].mainSchema,
    subSchema: lang.dictionary[bahasa].subSchema,
    assign: lang.dictionary[bahasa].assign,
    create: lang.dictionary[bahasa].create,
    home: lang.dictionary[bahasa].home,
    notif: lang.dictionary[bahasa].notif,
    file: lang.dictionary[bahasa].file,
    competence: lang.dictionary[bahasa].competence,
    activation: lang.dictionary[bahasa].activation,
    alertexpired: lang.dictionary[bahasa].alertexpired,
    noteListSkill: lang.dictionary[bahasa].noteListSkill,
    skill: lang.dictionary[bahasa].skill,
    until: lang.dictionary[bahasa].until,
    confirm: lang.dictionary[bahasa].confirm,
    delete: lang.dictionary[bahasa].delete,
    totalUnit: lang.dictionary[bahasa].totalUnit,
    schemaName: lang.dictionary[bahasa].schemaName,
    schema: lang.dictionary[bahasa].schema,
    subSchemaCode: lang.dictionary[bahasa].subSchemaCode,
    subSchemaName: lang.dictionary[bahasa].subSchemaName,
    KBLICode: lang.dictionary[bahasa].KBLICode,
    KBLIYear: lang.dictionary[bahasa].KBLIYear,
    KBJICode: lang.dictionary[bahasa].KBJICode,
    KBJIYear: lang.dictionary[bahasa].KBJIYear,
    mainSchemaName: lang.dictionary[bahasa].mainSchemaName,
    upload: lang.dictionary[bahasa].upload,
    uploadTemplate: lang.dictionary[bahasa].uploadTemplate,
    year: lang.dictionary[bahasa].year,
    time: lang.dictionary[bahasa].time,
    tglSubmit: lang.dictionary[bahasa].tglSubmit,
    startDate: lang.dictionary[bahasa].startDate,
    endDate: lang.dictionary[bahasa].endDate,
    note: lang.dictionary[bahasa].note,
    statusGraduation: lang.dictionary[bahasa].statusGraduation,
    recomentAsesor: lang.dictionary[bahasa].recomentAsesor,
    positionPleno: lang.dictionary[bahasa].positionPleno,
    plenoDate: lang.dictionary[bahasa].plenoDate,
    ChangePlenoDate: lang.dictionary[bahasa].ChangePlenoDate,
    plenoMember: lang.dictionary[bahasa].plenoMember,
    assessmentLetter: lang.dictionary[bahasa].assessmentLetter,
    certificate: lang.dictionary[bahasa].certificate,
    assessmentName: lang.dictionary[bahasa].assessmentName,
    tukName: lang.dictionary[bahasa].tukName,
    countAsesor: lang.dictionary[bahasa].countAsesor,
    countAsesi: lang.dictionary[bahasa].countAsesi,
    countAdmin: lang.dictionary[bahasa].countAdmin,
    inputRequirements: lang.dictionary[bahasa].inputRequirements,
    requirementsType: lang.dictionary[bahasa].requirementsType,
    assessmentDate: lang.dictionary[bahasa].assessmentDate,
    viewMore: lang.dictionary[bahasa].viewMore,
    reject: lang.dictionary[bahasa].reject,
    formName: lang.dictionary[bahasa].formName,
    DepartmentCode: lang.dictionary[bahasa].DepartmentCode,
    DepartmentName: lang.dictionary[bahasa].DepartmentName,
    FacultyCode: lang.dictionary[bahasa].FacultyCode,
    alertName: lang.dictionary[bahasa].alertName,
    alertPatternName: lang.dictionary[bahasa].alertPatternName,
    alertEmail: lang.dictionary[bahasa].alertEmail,
    alertUserName: lang.dictionary[bahasa].alertUserName,
    alertContact: lang.dictionary[bahasa].alertContact,
    alertPattertContact: lang.dictionary[bahasa].alertPattertContact,
    alertMinMaxContact: lang.dictionary[bahasa].alertMinMaxContact,
    logout: lang.dictionary[bahasa].logout,
    alertInputNull: lang.dictionary[bahasa].alertInputNull,
    alertInput: lang.dictionary[bahasa].alertInput,
    alertMaxUser: lang.dictionary[bahasa].alertMaxUser,
    letter: lang.dictionary[bahasa].letter,
    print: lang.dictionary[bahasa].print,
    view: lang.dictionary[bahasa].view,
    alertEmptyForm: lang.dictionary[bahasa].alertEmptyForm,
    alertWrongInput: lang.dictionary[bahasa].alertWrongInput,
    alertAlready: lang.dictionary[bahasa].alertAlready,
    scheduleAsesor: lang.dictionary[bahasa].scheduleAsesor,
    stateRequestAssessment: lang.dictionary[bahasa].stateRequestAssessment,
    stateReadyPraAssessment: lang.dictionary[bahasa].stateReadyPraAssessment,
    stateReview: lang.dictionary[bahasa].stateReview,
    statePraAsesment: lang.dictionary[bahasa].statePraAsesment,
    stateReal: lang.dictionary[bahasa].stateReal,
    statePlenoFinish: lang.dictionary[bahasa].statePlenoFinish,
    stateCertificate: lang.dictionary[bahasa].stateCertificate,
    stateAsesmentReject: lang.dictionary[bahasa].stateAsesmentReject,
    dateSubmit: lang.dictionary[bahasa].dateSubmit,
    ActiveAsesor: lang.dictionary[bahasa].ActiveAsesor,
    Assessors: lang.dictionary[bahasa].Assessors,
    people: lang.dictionary[bahasa].people,
    APLFile: lang.dictionary[bahasa].APLFile,
    HelperDownload: lang.dictionary[bahasa].HelperDownload,
    DownloadLink: lang.dictionary[bahasa].DownloadLink,
    UserExisting: lang.dictionary[bahasa].UserExisting,
    AssignType: lang.dictionary[bahasa].AssignType,
    withAPL: lang.dictionary[bahasa].withAPL,
    notAPL: lang.dictionary[bahasa].notAPL,
    selectAPLTab: lang.dictionary[bahasa].selectAPLTab,
    messageAlert: lang.dictionary[bahasa].messageAlert,
    alreadyAssign: lang.dictionary[bahasa].alreadyAssign,
    portfolio: lang.dictionary[bahasa].portfolio,
    reviewDoc: lang.dictionary[bahasa].reviewDoc,
    PraAssessmentCompleted: lang.dictionary[bahasa].PraAssessmentCompleted,
    PlenoFinish: lang.dictionary[bahasa].PlenoFinish,
    signature: lang.dictionary[bahasa].signature,
    signatureAlready: lang.dictionary[bahasa].signatureAlready,
    no_assessors: lang.dictionary[bahasa].no_assessors,
    printCertificate: lang.dictionary[bahasa].printCertificate,
    reset: lang.dictionary[bahasa].reset,
    tukRequest: lang.dictionary[bahasa].tukRequest,
    viewDocument: lang.dictionary[bahasa].viewDocument,
    approve: lang.dictionary[bahasa].approve,
    DataAssesment: lang.dictionary[bahasa].DataAssesment,
    Assessment: lang.dictionary[bahasa].Assessment,
    PortfolioName: lang.dictionary[bahasa].PortfolioName,
    PortfolioType: lang.dictionary[bahasa].PortfolioType,
    yes: lang.dictionary[bahasa].yes,
    no: lang.dictionary[bahasa].no,
    waitingConfirm: lang.dictionary[bahasa].waitingConfirm,
    noFile: lang.dictionary[bahasa].noFile,
    managementLetters: lang.dictionary[bahasa].managementLetters,
    needPermission: lang.dictionary[bahasa].needPermission,
    letterName: lang.dictionary[bahasa].letterName,
    lastUpdate: lang.dictionary[bahasa].lastUpdate,
    typeFile: lang.dictionary[bahasa].typeFile,
    number: lang.dictionary[bahasa].number,
    typeTuk: lang.dictionary[bahasa].typeTuk,
    document: lang.dictionary[bahasa].document,
    assignAsesi: lang.dictionary[bahasa].assignAsesi,
    AssessorName: lang.dictionary[bahasa].AssessorName,
    SuccessAsign: lang.dictionary[bahasa].SuccessAsign,
    multipleFile: lang.dictionary[bahasa].multipleFile,
    alertRadioButton: lang.dictionary[bahasa].alertRadioButton,
    assessors: lang.dictionary[bahasa].assessors,
    submission: lang.dictionary[bahasa].submission,
    listRejected: lang.dictionary[bahasa].listRejected,
    listPortfolio: lang.dictionary[bahasa].listPortfolio,
    listTUK: lang.dictionary[bahasa].listTUK,
    listUsers: lang.dictionary[bahasa].listUsers,
    listAsesor: lang.dictionary[bahasa].listAsesor,
    listAsesi: lang.dictionary[bahasa].listAsesi,
    listMainSchema: lang.dictionary[bahasa].listMainSchema,
    listSubSchema: lang.dictionary[bahasa].listSubSchema,
    searching: lang.dictionary[bahasa].searching,
    viewAllNotif: lang.dictionary[bahasa].viewAllNotif,
    asesi: lang.dictionary[bahasa].asesi,
    listAlumni: lang.dictionary[bahasa].listAlumni,
    method_test: lang.dictionary[bahasa].method_test,
    labelModalReject: lang.dictionary[bahasa].labelModalReject,
    allState: lang.dictionary[bahasa].allState,
    completed: lang.dictionary[bahasa].completed,
    documentAsesi: lang.dictionary[bahasa].documentAsesi,
    competencyTest: lang.dictionary[bahasa].competencyTest,
    portfollioTest: lang.dictionary[bahasa].portfollioTest,
    confirmDelete: lang.dictionary[bahasa].confirmDelete,
    confirmReject: lang.dictionary[bahasa].confirmReject,
    codeTuk: lang.dictionary[bahasa].codeTuk,
    placeholderCodeTUK: lang.dictionary[bahasa].placeholderCodeTUK,
    location: lang.dictionary[bahasa].location,
    date: lang.dictionary[bahasa].date,
    archives: lang.dictionary[bahasa].archives,
    position: lang.dictionary[bahasa].position,
    nameTuk: lang.dictionary[bahasa].nameTuk,
    UnitCompetention: lang.dictionary[bahasa].UnitCompetention,
    codeUnit: lang.dictionary[bahasa].codeUnit,
    requestDate: lang.dictionary[bahasa].requestDate,
    continue: lang.dictionary[bahasa].continue,
    alertNumber: lang.dictionary[bahasa].alertNumber,
    minCharacter: lang.dictionary[bahasa].minCharacter,
    alertErrorField: lang.dictionary[bahasa].alertErrorField,
    purposeAssessment: lang.dictionary[bahasa].purposeAssessment,
    generalRequiret: lang.dictionary[bahasa].generalRequiret,
    attachFile: lang.dictionary[bahasa].attachFile,
    save: lang.dictionary[bahasa].save,
    alertCancel: lang.dictionary[bahasa].alertCancel,
    userAlready: lang.dictionary[bahasa].userAlready,
    jobs: lang.dictionary[bahasa].jobs,
    restore: lang.dictionary[bahasa].restore,
    restoreAlert: lang.dictionary[bahasa].restoreAlert,
    education: lang.dictionary[bahasa].education
  };
};
export default language;
