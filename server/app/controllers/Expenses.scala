package controllers

import models.Expense
import play.api.mvc._
import play.api.libs.json.Json

class Expenses extends Controller {

  def list = Action { request =>
    Ok(Json.toJson(Expense.findAll))
  }

  def show(id: Long) = Action { request =>
    Expense.findById(id).map{ expense =>
      Ok(Json.toJson(expense))
    }.getOrElse(NotFound)
  }

//  def save(expense: Expense)

  def delete(id: Long) = Action { request =>
    Expense.findById(id).map{ expense =>
      Expense.remove(expense)
      NoContent // todo if remove is false, give a notfound
    }.getOrElse(NotFound)
  }
}