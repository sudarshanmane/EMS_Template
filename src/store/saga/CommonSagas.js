import { all, call, put } from "redux-saga/effects";
import { message } from "antd";
import { Method } from "../axios/axios";

function* failSaga(mes) {
  message.error(mes);
}

function* errorSaga(mes) {
  message.error(mes);
}

function* UserLoginGenerator(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* ChangePassword(action) {
  try {
    let result = yield call(Method.patchData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* UserRegisterGenerator(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getCurrentRole(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getCurrentUser(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}


function* getCertificate(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateCertificate(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getEducation(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateEducation(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getExperience(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateExperience(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}


function* addDocument(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getDocument(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateDocument(action) {
  try {
    let result = yield call(Method.patchData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* removeDocument(action) {
  try {
    let result = yield call(Method.deleteData, action);
    if (result.status === 204) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: "Deleted Successfully",
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}


function* getUserSetting(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateSelfLeave(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateUserSetting(action) {
  try {
    let result = yield call(Method.patchData, action);
    console.log(result, "syugdysgdyg");
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getUserAttendance(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}


function* updatePersonalInfo(action) {
  try {
    let result = yield call(Method.patchData, action);
    console.log(result, "syugdysgdyg");
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getPersonalInfo(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}


function* getUserAttendanceDynamic(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getLeaveList(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getSelfLeave(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getDynamicLeave(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getDynamicSelfLeave(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getStaff(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getDepartment(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getDesignation(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getBranch(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getUserRolePermission(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getEmploymentType(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getEducationList(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getShiftPolicy(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getWeekOff(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getAllDropdown(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addSalaryRevision(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addCertification(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addUserSetting(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addPersonalInformation(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addEducation(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addExperience(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getReportList(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getApprovedReportList(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getExpenseList(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addSelectedReport(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addReportsubmit(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateReport(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* deleteReport(action) {
  try {
    let result = yield call(Method.deleteData, action);
    if (result.status === 204) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: "Deleted Successfully",
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* getReport(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getVendorDetails(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getVendorPayment(action) {
  try {
    let result = yield call(Method.getData, action);

    if (result.status === 201) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* createVendorPayment(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateVendorPayment(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}




function* approveReport(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* rejectReport(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* approveExpense(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* rejectExpense(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* addreimbursementRecord(action) {
  console.log("comman sagaaaaaaaaaaa", action);
  try {
    let result = yield call(Method.postData, action);
    console.log("resultresultresultresultresultresult", result);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* rejectReportByAccount(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* categoryPanelList(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getAddCategoryList(action) {
  try {
    let result = yield call(Method.postData, action);

    if (result.status === 201) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateCategoryPanel(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* deleteCategory(action) {
  try {
    let result = yield call(Method.deleteData, action);
    if (result.status === 204) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: "Deleted Successfully",
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* createCategoryItem(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addExpensePolicy(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getExpensePolicy(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateExpensePolicy(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* deleteExpensePolicy(action) {
  try {
    let result = yield call(Method.deleteData, action);
    if (result.status === 204) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: "Deleted Successfully",
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* getMileage(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* fetchCategory(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* fetchReport(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addMileage(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateMileage(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* deleteMileage(action) {
  try {
    let result = yield call(Method.deleteData, action);
    if (result.status === 204) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: "Deleted Successfully",
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* getCard(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* applyCard(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* approveCard(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* rejectCard(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* getVendor(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* createVendor(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* deleteVendorTable(action) {
  try {
    let result = yield call(Method.deleteData, action);
    if (result.status === 204) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: "Deleted Successfully",
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* updateVendor(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateVendorTable(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* createTravel(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getTravel(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* deleteTravel(action) {
  try {
    let result = yield call(Method.deleteData, action);
    if (result.status === 204) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: "Deleted Successfully",
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* updateTravel(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* submitTravelRequest(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getTravelApproval(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* rejectTravelApprovals(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* approveTravelApprovals(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* addAllUser(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201 || result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.error("Saga error:", error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getAllUser(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

// =====================================================================================

function* getCommonGenerator(action) {
  try {
    let result = yield call(Method.getData, action);

    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getCommonAllFetchGenerator(action) {
  try {
    let result = yield call(Method.getData, action);
    if ((result.status === 202, result.status === 201, result.status === 200)) {
      return result;
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    console.log(error);
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addExpenseItem(action) {
  try {
    let result = yield call(Method.postData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addExpenseType(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

// function* Updateuserprofile(action) {
//   try {
//     console.log("actionaction", action);
//     let result = yield call(Method.putData, action);
//     if (result.status === 200) {
//       yield put({
//         type: `${action.type}_SUCCESS`,
//         status: "ok",
//         result: result.data,
//       });
//     } else {
//       yield call(failSaga, "Server Down!");
//     }
//   } catch (error) {
//   //   yield call(errorSaga, "The credentials you entered are incorrect!");
//   // }
//   if (error.response.data.detail === "Invalid page.") {
//     yield put({
//       type: `${action.type}_SUCCESS`,
//       status: "ok",
//       result: [],
//     });
//   }
//   yield call(errorSaga, "Somethin went wrong!");
// }
// }
function* Updateuserprofile(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    if (error.response && error.response.data.detail === "Invalid page.") {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: [],
      });
    } else {
      yield call(errorSaga, "Something went wrong!");
    }
  }
}

function* addExternalcodeType(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addUser(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getAccountingCodeList(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* accountingCodeSubmit(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getParentTypelist(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getItemNameList(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* itemizationsubmit(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}
function* AddExpesnesubmit(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 201) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getManagerList(action) {
  try {
    let result = yield call(Method.getData, action);
    if ((result.status === 202, result.status === 201, result.status === 200)) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* addRole(action) {
  try {
    let result = yield call(Method.getData, action);
    if (result.status === 201) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* getExpenseTypePanel(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Sorry, no more pages to display");
  }
}

function* AboutUs(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* AboutUsPage(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* itemizationPanel(action) {
  try {
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Sorry, no more pages to display!");
  }
}

function* getExternalAccountPanel(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Sorry, no more pages to display");
  }
}

function* ContactUs(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* ContactUsPage(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* accountingCodePanel(action) {
  try {
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Sorry, no more pages to display!");
  }
}

function* expensePanelList(action) {
  try {
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Sorry, no more pages to display!");
  }
}

function* getExpenseItemSetupPanel(action) {
  try {
    let result = yield call(Method.getData, action);

    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Sorry, no more pages to display");
  }
}
function* getAddUserPanel(action) {
  try {
    let result = yield call(Method.getData, action);

    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Sorry, no more pages to display");
  }
}
function* GetCompanyList(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* UpdateCompanyList(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* searchExpenseType(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* searchExternalAccountCode(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}
function* UpdateExpenseItemSetup(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}
function* updateExpenseType(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateExternalAccountCode(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}
function* UpdateAccountcodePanel(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* updateUser(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* approvedExpensemanager(action) {
  try {
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Expense Status: Approve");
  }
}

function* UpdateExpenseItemization(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* UpdateExpenseList(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* TableExpenseSubmitTrue(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "alredy submitted!");
  }
}

function* approvedbuttonExpensemanager(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "expense not approved!");
  }
}
function* rejectExpensemanager(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "expense not approved!");
  }
}
function* holdExpensemanager(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "expense not approved!");
  }
}

function* Expenseapprovedpanel(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "expense not approved!");
  }
}
function* financemanagerexpenselist(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}
function* exportbuttonAccountingCode(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!!");
  }
}
function* financemanagerreject(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Oops! Something went wrong!");
  }
}
function* financemanagerhold(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}
function* financemanagerapprove(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* accountAddByFinanceManager(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Account not added yet!");
  }
}

function* getUserRolePermissions(action) {
  try {
    const reuslt = yield all([
      getCommonAllFetchGenerator({
        contentType: action.contentType,
        URL: action.URLS.permissionsURL,
      }),
      getCommonAllFetchGenerator({
        contentType: action.contentType,
        URL: action.URLS.headersURL,
      }),
    ]);

    yield put({
      type: `${action.type}_SUCCESS`,
      result: { tableHeaders: reuslt[1].data, permissionList: reuslt[0].data },
    });
  } catch (error) {
    yield call(errorSaga, "The credentials you entered are incorrect!");
  }
}

function* postCommonGenerator(action) {
  try {
    let result = yield call(Method.postData, action);

    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    let message = Object.keys(error.response.data)[0];
    yield call(errorSaga, error.response.data[message][0]);
  }
}

function* commonDeleteRole(action) {
  try {
    let result = yield call(Method.deleteData, action);
    if (result.status === 204) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: "Deleted Successfully",
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* putCommonGenerator(action) {
  try {
    let result = yield call(Method.putData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* addEmployeeAccountNumber(action) {
  try {
    let result = yield call(Method.postData, action);
    if (result.status === 202) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* exportExpenseType(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* exportExpenseItemSetup(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* exportExternalAccountCode(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* exportUser(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* exportFinanceManagerList(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* getfinancemanagerdropdown(action) {
  try {
    let result = yield call(Method.getData, action);
    if (
      result.status === 202 ||
      result.status === 201 ||
      result.status === 200
    ) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}
function* exportCategoryList(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* ownExpenseDraftList(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}
function* exportItemizationList(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}
function* ownExpenseRejectList(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}
function* exportexpenseList(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}
function* exportexpenseapprovedList(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* ownExpenseHoldList(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}
function* commanmanagercardlidtfunction(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* ownExpenseApproveList(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

function* exportCompanypanel(action) {
  try {
    console.log("actionaction", action);
    let result = yield call(Method.getData, action);
    if (result.status === 200) {
      yield put({
        type: `${action.type}_SUCCESS`,
        status: "ok",
        result: result.data,
      });
    } else {
      yield call(failSaga, "Server Down!");
    }
  } catch (error) {
    yield call(errorSaga, "Something went wrong!");
  }
}

export {
  UserLoginGenerator,
  UserRegisterGenerator,
  getStaff,
  getUserSetting,
  getEmploymentType,
  getBranch,
  getDepartment,
  getDesignation,
  getUserRolePermission,
  addSalaryRevision,
  addCertification,
  addUserSetting,
  addPersonalInformation,
  addEducation,
  getEducationList,
  addExperience,
  getCurrentRole,
  getCurrentUser,
  getReportList,
  getApprovedReportList,
  getExpenseList,
  getShiftPolicy,
  getWeekOff,
  getAllDropdown,
  addReportsubmit,
  addSelectedReport,
  updateReport,
  deleteReport,
  getReport,
  getVendorDetails,
  getVendorPayment,
  createVendorPayment,
  updateVendorPayment,
  approveReport,
  rejectReport,
  approveExpense,
  rejectExpense,
  addreimbursementRecord,
  rejectReportByAccount,
  ChangePassword,
  getAddCategoryList,
  categoryPanelList,
  updateCategoryPanel,
  deleteCategory,
  createCategoryItem,
  addExpensePolicy,
  getExpensePolicy,
  updateExpensePolicy,
  deleteExpensePolicy,
  getMileage,
  fetchCategory,
  fetchReport,
  addMileage,
  updateMileage,
  deleteMileage,
  applyCard,
  getCard,
  approveCard,
  rejectCard,
  getVendor,
  createVendor,
  deleteVendorTable,
  updateVendor,
  updateVendorTable,
  createTravel,
  getTravel,
  deleteTravel,
  updateTravel,
  submitTravelRequest,
  getTravelApproval,
  rejectTravelApprovals,
  approveTravelApprovals,
  getAllUser,
  addAllUser,
  updateUserSetting,
  getUserAttendance,
  getUserAttendanceDynamic,
  getLeaveList,
  getSelfLeave,
  getDynamicLeave,
  getDynamicSelfLeave,
  updateSelfLeave,
  updatePersonalInfo,
  getPersonalInfo,
  getCertificate,
  updateCertificate,
  getEducation,
  updateEducation,
  getExperience,
  updateExperience,
  addDocument,
  getDocument,
  updateDocument,
  removeDocument,

  // =========================================
  approvedExpensemanager,
  addExpenseItem,
  addExpenseType,
  addExternalcodeType,
  addUser,
  getManagerList,
  addRole,
  getParentTypelist,
  getItemNameList,
  accountingCodeSubmit,
  Updateuserprofile,
  getCommonGenerator,
  getAccountingCodeList,
  itemizationsubmit,
  AddExpesnesubmit,
  getExpenseTypePanel,
  getExternalAccountPanel,
  AboutUs,
  ContactUs,
  AboutUsPage,
  ContactUsPage,
  itemizationPanel,
  accountingCodePanel,
  expensePanelList,
  getExpenseItemSetupPanel,
  GetCompanyList,
  getAddUserPanel,
  searchExpenseType,
  searchExternalAccountCode,
  UpdateExpenseItemSetup,
  updateExpenseType,
  updateUser,
  updateExternalAccountCode,
  UpdateAccountcodePanel,

  // UpdateExpenseIemaiztaion,
  UpdateExpenseItemization,
  UpdateExpenseList,
  TableExpenseSubmitTrue,
  approvedbuttonExpensemanager,
  rejectExpensemanager,
  holdExpensemanager,
  Expenseapprovedpanel,
  exportbuttonAccountingCode,
  financemanagerexpenselist,
  financemanagerreject,
  financemanagerhold,
  financemanagerapprove,
  accountAddByFinanceManager,
  getUserRolePermissions,
  postCommonGenerator,
  commonDeleteRole,
  putCommonGenerator,
  addEmployeeAccountNumber,
  exportExpenseType,
  exportExpenseItemSetup,
  exportExternalAccountCode,
  exportUser,
  exportFinanceManagerList,
  getfinancemanagerdropdown,
  exportCategoryList,
  exportItemizationList,
  exportexpenseList,
  exportexpenseapprovedList,
  ownExpenseDraftList,
  ownExpenseRejectList,
  ownExpenseHoldList,
  UpdateCompanyList,
  commanmanagercardlidtfunction,
  ownExpenseApproveList,
  exportCompanypanel,
};
