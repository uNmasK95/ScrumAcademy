Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :types
  resources :functions
  resources :users,  only: [:index, :show]

  # resources :projects do 
  #   resources :teams, :controller => 'projects_teams'
  #   resources :userstories do
  #     resources :sprints do
  #       resources :tasks do
  #         resources :comments
  #         resources :doubts
  #       end
  #     end
  #   end
  # end

  # resources :teams do 
  #   resources :users, :controller => 'teams_users'
  # end

  resources :requests
  resources :statement do 
    resources :features
  end
  
  resources :teams

  resources :projects do
    resources :sprints
    resources :userstories do 
      resources :task do 
        resources :comments
        resources :doubts
      end
    end
  end

  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
end
