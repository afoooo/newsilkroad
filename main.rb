require "sinatra"

get '/layout' do
	erb :layout
end

get '/home' do
	erb :home
end

get '/about' do
	erb :about
end

get '/shop' do
	erb :shop
end

get '/contact' do
	erb :contact
end