# UK Income Tax
How much Income Tax you pay in each tax year depends on:

* How much of your income is above your Personal Allowance
* How much of your income falls within each tax band

Some income is tax-free.

All the figures are for the tax year from 6 April 2020 to 5 April 2021.

## Goal

Given a yearly salary amount before tax calculate an amount of income tax needed to be collected. 

## Assumptions

For the purpose of this exercise we will make some assumptions to simplify the problem:

* All the income for a person in question is taxable and obtained during a single employment. 
* The person in question does not claim any allowances or receive any taxable benefits from the employment. 

## Tax-free Personal Allowance
The standard Personal Allowance is £12,500, which is the amount of income you do not have to pay tax on.

## Taxable Bands

Band | Taxable income | Tax rate
-- | -- | --
Personal Allowance | Up to £12,500 | 0%
Basic rate | £12,501 to £50,000 | 20%
Higher rate* | £50,001 to £150,000 | 40%
Additional rate* | over £150,000 | 45%

(Source: gov.uk)[https://www.gov.uk/income-tax-rates]

**You do not get a Personal Allowance on taxable income over £125,000.*

## Income over £100,000
Your Personal Allowance goes down by £1 for every £2 that your adjusted net income is above £100,000. This means your allowance is zero if your income is £125,000 or above.

For example at £*110,000* the Personal Allowance will be £*7,500*. 

`12,500 - (110,000 - 100,000) / 2 = 7,500`

## Tax Bands After Deducting Personal Allowance

In order to avoid any confusion, we first deduct the effective personal allowance (which could be 0) and then use bands in the table below to calculate the tax.

Band | Adjusted Taxable income | Tax rate
-- | -- | --
Basic rate | 0 to £37,500 | 20%
Higher rate | £37,501 to £150,000 | 40%
Additional rate | over £150,000 | 45%

## Examples

Income | Tax | Notes
-- | -- | --
5,600 | 0 | 
12,600 | 20 |
50,000 | 7,500 | 
60,000 | 11,500 | 
99,000 | 27,100 |
110,000 | 33,500|
125,000| 42,500|
155,000|54,750|
1,000,000|435,000|

## Getting started

```
$ cd js/problem
$ npm install
$ npm test
```
