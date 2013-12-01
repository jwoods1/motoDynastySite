require 'test_helper'

class RacesControllerTest < ActionController::TestCase
  test "should get race" do
    get :race
    assert_response :success
  end

end
