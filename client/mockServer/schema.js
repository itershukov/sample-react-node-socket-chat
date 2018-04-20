/**
 * Created by itersh on 07.03.2018.
 */
const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 25,
      "maxItems": 100,
      "items": {
        "type": "object",
        "properties": {
          "login": {
            "type": "string",
            "faker": "random.uuid"
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          },
          "enabled": {
            "type": "boolean"
          },
          "lastAccess": {
            "type": "integer",
            "minimum": 1220070400,
            "maximum": 1504964799,
            "exclusiveMinimum": true
          },
          "company": {
            "type": "string",
            "faker": "company.companyName"
          },
          "mobile": {
            "type": "string",
            "faker": "phone.phoneNumberFormat"
          }
        },
        "required": ["login", "firstName", "lastName", "email", "enabled", "lastAccess","mobile", "country", "company", "contracts"]
      }
    },
    "posts": {
      "type": "array",
      "minItems": 50,
      "maxItems": 50,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "faker": "random.uuid"
          },
          "title": {
            "type": "string",
            "faker": "random.string"
          },
          "comment": {
            "type": "string",
            "faker": "lorem.sentence"
          }
        },
        "required": ["id",  "title", "comment"]
      }
    }
  },
  "required": ["users", "posts"]
}

module.exports = schema
