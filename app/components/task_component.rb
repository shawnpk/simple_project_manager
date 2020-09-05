class TaskComponent < ViewComponent::Base
  attr_reader :task
  
  def initialize(task:)
    @task = task
  end

  def render?
    task.persisted?
  end
end
