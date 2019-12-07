import React from 'react'
import { addItem, getCategories, getSeasons } from '../apis/items'
// import StarRating from 'react-svg-star-rating'

class AddItemForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem: {
                item_name: "",
                description: "",
                address: "",
                img_url: "",
                public: false,
                category: "",
                season: "",
                // rating: null, 
                quantity: null,
            },
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // this.handleImage = this.handleImage.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
        // this.onStartClick= this.onStartClick.bind(this)

    }

    componentDidMount(){
        getCategories()
            .then(categoryData => {
                this.setState({categoryData})
            })
        getSeasons()
            .then(seasonData => {
                this.setState({seasonData})
            })
    }

    // onStartClick(name, nextValue, prevValue) {
    //     this.setState({
    //         newItem: {
    //             ...this.state.newItem,
    //             rating: nextValue
    //         }})

    // }

    handleChange(e) {
        this.setState({
            newItem: {
                ...this.state.newItem,
                [e.target.name]: e.target.value
            }
        })
    }

    // handleImage(e) {
    //     const data = new FormData() 
    //     data.append('file', e.target.files[0])

    //     this.setState({
    //         newItem: {
    //             ...this.state.newItem,
    //             // img: URL.createObjectURL(e.target.files[0])
    //             image: data
    //         }
    //     })
    // }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.newItem)
        addItem(this.state.newItem)
    }

    handleCheckbox(e) {
        this.setState({
            newItem: {
                ...this.state.newItem,
                public: !this.state.newItem.public
            }
        })
    }


    render() {
        // const {rating} = this.state
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <h3>Add new Item</h3>
              <label>
                Item
                <br></br>
                <input
                  required
                  type='text'
                  name='item_name'
                  onChange={this.handleChange}
                />
              </label>
              <br></br>
              <label>
                Description
                <br></br>
                <textarea
                  required
                  type='text'
                  name='description'
                  onChange={this.handleChange}
                />
              </label>
              <br></br>
              <label>
                Address
                <br></br>
                <input
                  required
                  type='text'
                  name='address'
                  onChange={this.handleChange}
                />
              </label>
              <br></br>
              <label>
                Photo
                <br></br>
                <input
                  required
                  type='text'
                  name='img_url'
                  onChange={this.handleChange}
                />
                {/* <img src={this.state.newItem.img} /> */}
              </label>
              <br></br>
              <label>
                Public
                <input
                  type='checkbox'
                  name='public'
                  onChange={this.handleCheckbox}
                />
              </label>
              <br></br>
              <label>
                Category
                <select required name='category' onChange={this.handleChange}>
                  <option value=''></option>
                  {this.state.categoryData &&
                    this.state.categoryData.map((category,i) => {
                      return (
                        <option key={i} value={category.id}>
                          {category.category_name}
                        </option>
                      )
                    })}
                </select>
              </label>
              <br></br>
              <label>
                Season
                <select required name='season' onChange={this.handleChange}>
                  <option value=''></option>
                  {this.state.seasonData &&
                    this.state.seasonData.map((season,i) => {
                      return (
                        <option key={i} value={season.id}>{season.season_name}</option>
                      )
                    })}
                </select>
              </label>
              <br></br>
              <label>
                <p>Quantity</p>
                <input
                  name='quantity'
                  type='range'
                  min='1'
                  max='50'
                  onChange={this.handleChange}
                />
                {this.state.newItem.quantity}
              </label>
              <br></br>
              {/* <p>Rating</p>
                    <StarRating
                        name = 'rate1'
                        starCount={5}
                        value={rating}
                        onClick={this.onStartClick}
                        /> */}
              {/* <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>*/}
              <br></br>
              <input type='submit' value='Submit' />
            </form>
          </div>
        )
    }
}

// checkbox for public/private - boolean 
// dropdown for category 
// dropdown for season 4 seasons + other
// quantity - slider 
// rating - integer 1-5
// upload image

export default AddItemForm