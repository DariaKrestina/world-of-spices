class BlendsController < ApplicationController
  before_action :set_blend, only: %i[show update destroy]
  before_action :authorize_request
  before_action :authorize, except: %i[index create]

  # GET /blends
  def index
    @blends = Blend.where(user: @current_user)

    render json: @blends, include: :spices
  end

  # GET /blends/1
  def show
    render json: @blend, include: :spices
  end

  # POST /blends
  def create
    @blend = Blend.new(blend_params.except(:spices))
    @blend.user = @current_user

    if @blend.save
      @spices = Spice.find(blend_params[:spices].map {|s| s[:id]})
      @blend.spices = @spices
      render json: @blend, include: :spices, status: :created
    else
      render json: @blend.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blends/1
  def update
    if @blend.update(blend_params)
      # @spices = Spice.find(blend_params[:spices].map {|s| s[:id]})
      # @blend.spices = @spices
      render json: @blend, include: :spices
    else
      render json: @blend.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blends/1
  def destroy
    @blend.destroy
  end

  def add_spice_to_blend
    @blend = Blend.find(params[:id])
    @spice = Spice.find(params[:spice_id])

    @blend.spices << @spice

    render json: @blend, include: :spices
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_blend
    @blend = Blend.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def blend_params
    params.require(:blend).permit(:name, spices: [:id, :description, :name, :img_URL, :created_at, :updated_at, :flavor])
  end

  def authorize
    render json: 'You unauthorized for this action', status: :unauthorized unless @blend.user == @current_user
  end
end
