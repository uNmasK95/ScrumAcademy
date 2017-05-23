Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :types
  resources :functions
  resources :users,  only: [:index, :show, :update, :destroy]
  resources :teams do 
    post 'users', to: 'teams#add'
  end


  resources :statements do 
    resources :features
  end
  resources :requests
  

  resources :projects do
    resources :sprints do 
        post 'userstories', to: 'sprints#add'
        delete 'userstories/:id', to: 'sprints#delete'
    end
    resources :userstories do 
      resources :tasks do
        resources :comments
        resources :doubts, only: [ :index ]
      end
    end
  end

  resources :doubts


  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
end
