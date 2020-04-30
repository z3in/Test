const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  LC_ID: {
    type: String,
    required: true,
  },
  LC_USER: {
    type: String,
    required: true,
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
  LAST_NAME: {
    type: String,
    required: true,
  },
  FIRST_NAME: {
    type: String,
    required: true,
  },
  MIDDLE_NAME: {
    type: String,
    required: true,
  },
  SUFFIX: {
    type: String,
    required: true,
  },
  NICK_NAME: {
    type: String,
    required: true,
  },
  MOTHERS_MAIDEN: {
    type: String,
    required: true,
  },
  FATHER_NAME: String,
  MOTHER_NAME: String,
  BIRTHDAY: String,
  GENDER: String,
  MARITAL_STATUS: String,
  CITIZENSHIP: String,
  NATIONALITTY: String,
  RELIGION: String,
  COUNTRY_CODE: String,
  REGION_CODE: String,
  CITY_CODE: String,
  BARANGAY_CODE: String,
  ZIP_CODE: String,
  ADDRESS_1: String,
  ADDRESS_2: String,
  MOBILE_NO1: String,
  MOBILE_NO2: String,
  TEL_NO: String,
  FAX_NO: String,
  EMAIL_ADD: String,
  PICTURE: String,
});

module.exports = mongoose.model("Posts", PostSchema);
