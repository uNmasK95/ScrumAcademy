# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170509174244) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "description", null: false
    t.bigint "task_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["task_id"], name: "index_comments_on_task_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "doubts", force: :cascade do |t|
    t.string "description", null: false
    t.string "answer"
    t.bigint "task_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["task_id"], name: "index_doubts_on_task_id"
    t.index ["user_id"], name: "index_doubts_on_user_id"
  end

  create_table "features", force: :cascade do |t|
    t.string "description", null: false
    t.integer "priority", default: 0, null: false
    t.bigint "statement_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["statement_id"], name: "index_features_on_statement_id"
  end

  create_table "functions", force: :cascade do |t|
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.date "startDate", null: false
    t.date "endDate", null: false
    t.bigint "statement_id", null: false
    t.bigint "team_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["statement_id"], name: "index_projects_on_statement_id"
    t.index ["team_id"], name: "index_projects_on_team_id"
  end

  create_table "requests", force: :cascade do |t|
    t.bigint "team_id"
    t.bigint "statement_id"
    t.boolean "accept", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["statement_id"], name: "index_requests_on_statement_id"
    t.index ["team_id"], name: "index_requests_on_team_id"
  end

  create_table "sprints", force: :cascade do |t|
    t.string "description", null: false
    t.date "startDate", null: false
    t.date "endDate", null: false
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_sprints_on_project_id"
  end

  create_table "statements", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.date "startDate", null: false
    t.date "endDate", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_statements_on_user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "description", null: false
    t.bigint "userstorie_id", null: false
    t.bigint "user_id"
    t.integer "state", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_tasks_on_user_id"
    t.index ["userstorie_id"], name: "index_tasks_on_userstorie_id"
  end

  create_table "team_users", force: :cascade do |t|
    t.bigint "team_id", null: false
    t.bigint "user_id", null: false
    t.bigint "function_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["function_id"], name: "index_team_users_on_function_id"
    t.index ["team_id"], name: "index_team_users_on_team_id"
    t.index ["user_id"], name: "index_team_users_on_user_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "types", force: :cascade do |t|
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "name", null: false
    t.bigint "type_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["type_id"], name: "index_users_on_type_id"
  end

  create_table "userstorie_sprints", force: :cascade do |t|
    t.bigint "userstorie_id", null: false
    t.bigint "sprint_id", null: false
    t.integer "deferred", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sprint_id"], name: "index_userstorie_sprints_on_sprint_id"
    t.index ["userstorie_id"], name: "index_userstorie_sprints_on_userstorie_id"
  end

  create_table "userstories", force: :cascade do |t|
    t.string "description", null: false
    t.integer "priority", default: 0
    t.integer "score", default: 0
    t.bigint "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_userstories_on_project_id"
  end

  add_foreign_key "comments", "tasks"
  add_foreign_key "comments", "users"
  add_foreign_key "doubts", "tasks"
  add_foreign_key "doubts", "users"
  add_foreign_key "features", "statements"
  add_foreign_key "projects", "statements"
  add_foreign_key "projects", "teams"
  add_foreign_key "requests", "statements"
  add_foreign_key "requests", "teams"
  add_foreign_key "sprints", "projects"
  add_foreign_key "statements", "users"
  add_foreign_key "tasks", "users"
  add_foreign_key "tasks", "userstories", column: "userstorie_id"
  add_foreign_key "team_users", "functions"
  add_foreign_key "team_users", "teams"
  add_foreign_key "team_users", "users"
  add_foreign_key "users", "types"
  add_foreign_key "userstorie_sprints", "sprints"
  add_foreign_key "userstorie_sprints", "userstories", column: "userstorie_id"
  add_foreign_key "userstories", "projects"
end
