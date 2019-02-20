Feature: Sample

  # everyone can reuse @BRIT-4214
  @smoke
  Scenario Outline: login as a manager
    Given user login as a manager using "<username>" and "<password>"

    Examples:
      | username                        | password   |
      | Lunch_InvoicingManager@info.com | LD686gfX22 |
