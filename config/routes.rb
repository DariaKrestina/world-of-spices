Rails.application.routes.draw do
  resources :users, only: :create
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :blends
  resources :spices, only: [:index, :show]
  put '/spices/:spice_id/blends/:id', to: 'blends#add_spice_to_blend'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
