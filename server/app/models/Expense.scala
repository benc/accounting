package models

import java.time.LocalDateTime
import java.util.UUID

case class Expense(id: UUID,
                   name: String,
                   category: String,
                   currency: String,
                   remark: String,
                   amount: BigDecimal,
                   vat: Int,
                   invoiceDate: LocalDateTime,
                   paymentDate: LocalDateTime,
                   indexNumber: Int) {
}

/**
 * Expense data access
 */
object Expense {
  // hardcoded bliss
  var expenses = Set(
    Expense(
      id = UUID.randomUUID(),
      name = "Amazon",
      category = "Boeken",
      currency = "EUR",
      remark = "Lorem ipsum",
      amount = 54.34,
      vat = 21,
      invoiceDate = LocalDateTime.now(),
      paymentDate = LocalDateTime.now(),
      indexNumber = -1
    ),
    Expense(
      id = UUID.randomUUID(),
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

  def add(expense: Expense) = {
    expenses = expenses + expense
    expenses.contains(expense)
  }

  def save(expense: Expense) = {
    val oldExpense = findById(expense.id)

    if (oldExpense.isDefined) {
      expenses = expenses - oldExpense.get
      add(expense)
    }

    expenses.contains(expense)
  }

  def remove(expense: Expense) = {
    val oldExpenses = expenses
    expenses = expenses - expense
    oldExpenses.contains(expense)
  }

  def findAll = expenses.toList.sortBy(_.name)

  def findById(id: UUID) = expenses.find(_.id == id)
}