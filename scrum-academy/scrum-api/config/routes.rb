Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :types
  resources :functions
  resources :users,  only: [:index, :show]
  resources :teams do 
    post 'users', to: 'teams#add'
  end


  resources :statements do 
    resources :features
  end
  resources :requests
  

  # resources :projects do
  #   resources :sprints
  #   resources :userstories do 
  #     resources :task do 
  #       resources :comments
  #       resources :doubts
  #     end
  #   end
  # end

  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
end
