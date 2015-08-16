package controllers

import models.Expense
import play.api.mvc._
import play.api.libs.json.Json

class Expenses extends Controller {

  def list = Action { request =>
    Ok(Json.toJson(Expense.findAll));
  }

  def save() = play.mvc.Results.TODO

  def newInvoice() = play.mvc.Results.TODO
}