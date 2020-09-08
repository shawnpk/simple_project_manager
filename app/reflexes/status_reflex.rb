# frozen_string_literal: true

class StatusReflex < ApplicationReflex
  delegate :render, to: ApplicationController
  
  def change
    task = Task.find(element.dataset[:id])
    task.update(status: element.dataset[:status])
    morph dom_id(task), render(TaskComponent.new(task: task))
  end
end
