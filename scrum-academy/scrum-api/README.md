# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

* Routes

            Prefix Verb   URI Pattern                                      Controller#Action
             types GET    /types(.:format)                                 types#index
                   POST   /types(.:format)                                 types#create
                    { description }
              type GET    /types/:id(.:format)                             types#show
                   PATCH  /types/:id(.:format)                             types#update
                   PUT    /types/:id(.:format)                             types#update
                    { description }
                   DELETE /types/:id(.:format)                             types#destroy
         functions GET    /functions(.:format)                             functions#index
                   POST   /functions(.:format)                             functions#create
                    { description }
          function GET    /functions/:id(.:format)                         functions#show
                   PATCH  /functions/:id(.:format)                         functions#update
                   PUT    /functions/:id(.:format)                         functions#update
                    { description }
                   DELETE /functions/:id(.:format)                         functions#destroy
             users GET    /users(.:format)                                 users#index
              user GET    /users/:id(.:format)                             users#show
        team_users POST   /teams/:team_id/users(.:format)                  teams#add
                    { user, function }
             teams GET    /teams(.:format)                                 teams#index
                   POST   /teams(.:format)                                 teams#create
                    { description }
              team GET    /teams/:id(.:format)                             teams#show
                   PATCH  /teams/:id(.:format)                             teams#update
                   PUT    /teams/:id(.:format)                             teams#update
                    { description }
                   DELETE /teams/:id(.:format)                             teams#destroy
statement_features GET    /statements/:statement_id/features(.:format)     features#index
                   POST   /statements/:statement_id/features(.:format)     features#create
                    { description, priority }
 statement_feature GET    /statements/:statement_id/features/:id(.:format) features#show
                   PATCH  /statements/:statement_id/features/:id(.:format) features#update
                   PUT    /statements/:statement_id/features/:id(.:format) features#update
                    { description, priority }
                   DELETE /statements/:statement_id/features/:id(.:format) features#destroy
        statements GET    /statements(.:format)                            statements#index
                   POST   /statements(.:format)                            statements#create
                    { name, description, startDate, endDate, user }
         statement GET    /statements/:id(.:format)                        statements#show
                   PATCH  /statements/:id(.:format)                        statements#update
                   PUT    /statements/:id(.:format)                        statements#update
                    { name, description, startDate, endDate, user }
                   DELETE /statements/:id(.:format)                        statements#destroy
          requests GET    /requests(.:format)                              requests#index
                   POST   /requests(.:format)                              requests#create
                    { statement_id, team_id, accept }
           request GET    /requests/:id(.:format)                          requests#show
                   PATCH  /requests/:id(.:format)                          requests#update
                   PUT    /requests/:id(.:format)                          requests#update
                    { statement_id, team_id, accept }
                   DELETE /requests/:id(.:format)                          requests#destroy
        auth_login POST   /auth/login(.:format)                            authentication#authenticate
                    { email, password }
            signup POST   /signup(.:format)                                users#create
                    { email, password, name, type }
