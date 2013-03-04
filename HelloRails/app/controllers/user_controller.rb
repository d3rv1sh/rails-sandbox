class UserController < ApplicationController

  layout "main_layout"
  def index
    @chapter = "home"
    @posts = Post.all
    render ("posts/index")
  end

  def profile
    @chapter = "profile"
    @hide_slider = true
  end

  def help
    @chapter = "help"
    @hide_slider = true
    render('help')
  end

  def show
    @post = Post.find(params[:id])
    render("posts/")
  end

end
