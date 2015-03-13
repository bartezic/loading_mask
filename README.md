# Loading mask (CSS or With JQuery plugin)

CSS loading mask Gem for Rails

## Installation

Add this line to your application's Gemfile:

    gem 'loading_mask'

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install loading_mask

Add this line to your application.js file

    //= require loading_mask

Add this line to your application.css file

    *= require loading_mask
    or for SASS
    @import 'loading_mask_sass';

## Usage

Just add classes to HTML(in this case you should include only CSS):

    <div class="lmask-relative">
        <div class="lmask"></div>
    </div>

Add mask to jquery element via JS:

    $('body').lmask('show');

Remove mask via JS:

    $('body').lmask('hide');

Check out the [demo](http://codepen.io/bartezic/pen/ByqeNq).

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Changelog

<ul>
  <li>Released gem v.0.0.2</li>
  <li>Released gem v.0.0.1</li>
</ul>

## Contributors

[Viktor Oleksyn](https://github.com/bartezic)

### License

Available under the MIT License.
