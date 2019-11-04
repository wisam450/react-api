import React, { Component } from 'react'
// import '..App.css'


export default class Images extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             url : '',
             isLoading: false, //// this meaning not Loading
             fetchedData: []
        }
    }
    ////gds
    static getDerivedStateFromProps(props, state) {
        if(state.url !== props.url){
            return(state.url=props.url)
        }else{
            return null
        }
    }
    ////cdm
    componentDidMount() {
        this.setState({
            isLoading: true /// hear is Loading
        })
        const u = this.state.url
        fetch(u)
        .then((response)=> {
            return(response.json())
        })
        .then((data)=> {
            console.log(data) 
            this.setState({fetchedData:data.hits , isLoading: false}) /// After finshing loding it musst Stop Loading  
        })
    }
    

    render() {
        let image_array = null;
        let loading = null;
        ////// For lading
        if(this.state.isLoading){
            loading = <div>
                <h2>is Loading ....</h2>
                <div className="load-div"></div>
            </div>
        }
        /// For data - show
        if(this.state.fetchedData.length > 0){
            image_array = this.state.fetchedData.map((item,index)=>{
                let style= {
                    width : item.previewWidth,
                    height: item.previewHeight,
                    display: 'inline-block' 
                }
                return (
                    <div key={index} style={style}>
                        <a href={item.largeImageURL} target='_blank'>
                        <img src={item.previewURL} alt={item.tags}/>
                        </a>
                        
                    </div>
                )
            })
          
            
        }
        return (
           <div>
               {loading}
                {image_array}

           </div>
                
            
        )
    }
}
