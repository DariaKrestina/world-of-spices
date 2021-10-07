class SpicesController < ApplicationController
  before_action :authorize_request
  
  # GET /spices
  def index
    @spices = Spice.all
    render json: @spices
  end

  # GET /spices/1
  def show
    @spice = Spice.find(params[:id])
    render json: @spice
  end
end
