import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { deleteItem, getUserData } from '../apis/items'
import { setCurrentItem } from '../actions/items'

class ItemList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: null,
      data: null
    }
  }

  // --------------------
  //  connecting redux make this break for some reason, please leave comments
  // --------------------
  //   constructor(props) {
  //     super(props)
  //     this.state = {}
  //   }

    componentDidMount() {
      if(this.props.auth.isAuthenticated) getUserData(this.props.auth.user.user_name).then(data => this.setState({data}))
    }

  //   componentDidUpdate(newProps) {
  //     console.log(newProps)
  //     this.setState({
  //       items: newProps.items
  //     })
  //     return true
  //   }

  handleDelete = (id) => {
    deleteItem(id)
      .then(() => {
        this.refreshPage()
      })
  }

  refreshPage = () => {
    window.location.reload()
  }

  render() {
    return (
      <div className='scrollable'>
        <div className='container rounded bg-main mb-3 item-cont  w-100'>
          <div className='container-fluid rounded bg-main mb-3 w-100'>
            <h3 className="list-heading">Listed Items</h3>
            <div className="row justify-content-center">
              <div className="col-centered">

                {this.props.items.map((item, i) => {
                  return (
                    <div key={i} className="card list-card text-left" style={{ alignItems: 'left' }} >
                      <div className="ListItemItems text-left" onClick={() => this.props.dispatch(setCurrentItem(item))}>
                        <div className="itemListImgDiv">
                          <img className="card-img-top" src={item.image == null ? `/images/icon${item.category_id}.svg` : item.image} alt={item.item_name} style={{ 'MaxWidth': 2 + 'rem' }} />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{item.item_name}</h5>
                          <h6><em>{item.suburb}</em></h6>
                          <p className="card-text">{item.description}</p>


                          {(this.props.auth.isAuthenticated && item.user_id == this.state.data) &&
                            <>
                              <Link to={`/update/${item.id}`}>
                                <button className="btn bg-main-reverse spacer list-button mx-0">Update</button>
                              </Link>
                              <button className="btn bg-main-reverse spacer list-button mx-0" onClick={() => window.confirm("Are you sure you wish to delete this item?") && this.handleDelete(item.id)}>Delete</button>
                            </>
                          }
                        </div>
                      </div>
                    </div>
                  )
                }
                )}
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
}


export default ItemList
