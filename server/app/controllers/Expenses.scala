package controllers

import java.util.UUID

import models.Expense
import play.api.libs.json.Json
import play.api.mvc._

class Expenses extends Controller {

  def list = Action { request =>
    Ok(Json.toJson(Expense.findAll))
  }

  def show(id: String) = Action { request =>
    Expense.findById(UUID.fromString(id)).map { expense =>
      Ok(Json.toJson(expense))
    }.getOrElse(NotFound)
  }

  //  def save(expense: Expense)

  def delete(id: String) = Action { request =>
    // TODO check id with response body
    Expense.findById(UUID.fromString(id)).map { expense =>
      Expense.remove(expense)
      NoContent // TODO if remove is false, give a notfound
    }.getOrElse(NotFound)
  }

  def save(id: String) = Action { request =>
    // TODO check id with response body
    val expense = request.body.asJson.get.as[Expense]

    // TODO improve handling
    if (Expense.save(expense)) {
      Ok(Json.toJson(expense))
    } else {
      InternalServerError
    }
  }

  def add(id: String) = Action { request =>
    // TODO check id with response body
    val expense = request.body.asJson.get.as[Expense].copy(UUID.fromString(id))

    // TODO improve handling
    if (Expense.add(expense)) {
      Ok(Json.toJson(expense))
    } else {
      InternalServerError
    }
  }
}