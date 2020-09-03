class Task < ApplicationRecord
  belongs_to :project

  validates :status, inclusion: { in: %w[not-started in-progress complete] }
end
