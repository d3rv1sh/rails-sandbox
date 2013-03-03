class UserController < ApplicationController

  layout "main_layout"
  def index
    @chapter = "home"
    @slider = true
    @posts = Post.all
    render ("posts/index")
  end

  def profile
    @chapter = "profile"
    @slider = false
  end

  def help
    @chapter = "help"
    @slider = false
    render('help')
  end

  def show
    @post = Post.find(params[:id])
    render("posts/")
  end

end
