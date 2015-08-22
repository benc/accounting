package controllers

import java.time.LocalDateTime
import java.util.UUID

import models.Expense
import play.api.libs.functional.syntax._
import play.api.libs.json._
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

  def delete(id: String) = Action { request =>
    Expense.findById(UUID.fromString(id)).map { expense =>
      Expense.remove(expense)
      NoContent // TODO if remove is false, give a notfound
    }.getOrElse(NotFound)
  }

  def save(id: String) = Action(parse.tolerantJson) { request =>
    if (Expense.findById(UUID.fromString(id)).isDefined) {
      val expense = request.body.as[Expense]
      println(expense)

      if (expense.id == UUID.fromString(id) && Expense.save(expense)) {
        Ok(Json.toJson(expense))
      } else {
        Conflict
      }
    } else {
      NotFound
    }
  }

  def add(id: String) = Action(parse.tolerantJson) { request =>
    if (Expense.findById(UUID.fromString(id)).isDefined) {
      Conflict
    } else {
      val expense = request.body.as[Expense].copy(UUID.fromString(id))
      println(expense)

      if (expense.id == UUID.fromString(id) && Expense.add(expense)) {
        Ok(Json.toJson(expense))
      } else {
        Conflict
      }
    }
  }

  implicit val expenseFormat: Format[Expense] = (
    (JsPath \ "id").format[UUID] and
    (JsPath \ "name").format[String] and
    (JsPath \ "category").format[String] and
    (JsPath \ "currency").format[String] and
    (JsPath \ "remark").format[String] and
    (JsPath \ "amount").format[BigDecimal] and
    (JsPath \ "vat").format[Int] and
    (JsPath \ "invoiceDate").format[LocalDateTime] and
    (JsPath \ "paymentDate").format[LocalDateTime] and
    (JsPath \ "indexNumber").format[Int]
  )(Expense.apply, unlift(Expense.unapply))

}