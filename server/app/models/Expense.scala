package models

import java.time.LocalDateTime

import play.api.libs.json.Json

case class Expense( id: Long,
                    name: String,
                    category: String,
                    currency: String,
                    remark: String,
                    amount: BigDecimal,
                    vat: Int,
                    invoiceDate: LocalDateTime,
                    paymentDate: LocalDateTime,
                    indexNumber: Int) {
  override def toString = "%s - %s".format(name, indexNumber)

  implicit val expenseWrites = Json.writes[Expense]
}

/**
 * Invoice data access
 */
object Expense {

  // hardcoded bliss
  val invoices = Set(
    Expense(
      id = 1,
      name = "Amazon",
      category = "Boeken",
      currency = "EUR",
      remark = "Lorem ipsum",
      amount = 54.34,
      vat = 0,
      invoiceDate = LocalDateTime.now(),
      paymentDate = LocalDateTime.now(),
      indexNumber = -1
    ),
    Expense(
      id = 2,
      name = "Coolblue",
      category = "IT materiaal",
      currency = "EUR",
      remark = "Dolor si amet",
      amount = 950.00,
      vat = 21,
      invoiceDate = LocalDateTime.now(),
      paymentDate = LocalDateTime.now(),
      indexNumber = -1
    )
  )

  implicit val expenseWrites = Json.writes[Expense]

  def findAll = invoices.toList.sortBy(_.name)

}