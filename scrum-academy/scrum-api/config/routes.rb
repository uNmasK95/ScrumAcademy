Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :types
  resources :functions
  resources :users,  only: [:index, :show]

  #resources :projects do 
   # resources :userstories do 
    #  resources :sprints do 
     #   resources :tasks 
     # end
    #end
  #end

  resources :teams

  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
end
