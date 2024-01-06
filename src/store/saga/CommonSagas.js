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

function* deleteVendor(action) {
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
  addSalaryRevision,
  addCertification,
  addUserSetting,
  addPersonalInformation,
  addEducation,
  addExperience,
  getCurrentRole,
  getCurrentUser,
  getReportList,
  addReportsubmit,
  updateReport,
  deleteReport,
  getReport,
  approveReport,
  rejectReport,
  approveExpense,
  rejectExpense,
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
  addMileage,
  updateMileage,
  deleteMileage,
  applyCard,
  getCard,
  approveCard,
  rejectCard,
  getVendor,
  createVendor,
  deleteVendor,
  updateVendor,
  createTravel,
  getTravel,
  deleteTravel,
  updateTravel,
  getAllUser,
  addAllUser,
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
