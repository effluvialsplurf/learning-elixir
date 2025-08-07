defmodule Learningsite.Repo do
  use Ecto.Repo,
    otp_app: :learningsite,
    adapter: Ecto.Adapters.Postgres
end
