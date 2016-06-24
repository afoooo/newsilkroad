require "sinatra"

get '/layout' do
	erb :layout
end

get '/' do
	erb :home
end

get '/product' do
	erb :product
end

get '/form' do
	erb :form
end

get '/success' do
	erb :success
end

get '/about' do
	erb :about
end
