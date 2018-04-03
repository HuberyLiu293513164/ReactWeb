import React,{Component} from "react";
import './css/StationTable.css';
class StationTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    id:0,
                    time:'海淀上地1',
                    job:'3',
                    stage:'FDD-LTE',
                    report:'上地西二旗',  
                    ondb:false,
                    edit:'编辑',
                    save:'保存',
                    del:'删除',
                },
                {
                    id:1,
                    time:'海淀上地2',
                    job:'6',
                    stage:'TDD-LTE',
                    report:'上地西二旗',  
                    ondb:false,
                    edit:'编辑',
                    save:'保存',
                    del:'删除',
                },
                {
                    id:2,
                    time:'海淀上地3',
                    job:'3',
                    stage:'FDD-LTE',
                    report:'上地西三旗',  
                    ondb:false,
                    edit:'编辑',
                    save:'保存',
                    del:'删除',
                },
                {
                    id:3,
                    time:'海淀上地4',
                    job:'3',
                    stage:'TDD-LTE',
                    report:'上地东二旗',  
                    ondb:false,
                    edit:'编辑',
                    save:'保存',
                    del:'删除',
                },
                {
                    id:4,
                    time:'海淀上地5',
                    job:'3',
                    stage:'FDD-LTE',
                    report:'上地方庄',   
                    ondb:false,
                    edit:'编辑',
                    save:'保存',
                    del:'删除',
                },
                {
                    id:5,
                    time:'海淀上地6',
                    job:'3',
                    stage:'FDD-LTE',
                    report:'上地',  
                    ondb:false,
                    edit:'编辑',
                    save:'保存',
                    del:'删除',
                },
                {
                    id:6,
                    time:'海淀上地6',
                    job:'3',
                    stage:'FDD-LTE',
                    report:'上地',  
                    ondb:false,
                    edit:'编辑',
                    save:'保存',
                    del:'删除',
                },
                {
                    id:7,
                    time:'海淀上地6',
                    job:'3',
                    stage:'FDD-LTE',
                    report:'上地',  
                    ondb:false,
                    edit:'编辑',
                    save:'保存',
                    del:'删除',
                },
                {
                    id:8,
                    time:'海淀上地6',
                    job:'3',
                    stage:'FDD-LTE',
                    report:'上地',  
                    ondb:false,
                    edit:'编辑',
                    save:'保存',
                    del:'删除',
                },
                {
                    id:9,
                    time:'海淀上地6',
                    job:'3',
                    stage:'FDD-LTE',
                    report:'上地',  
                    ondb:false,
                    edit:'编辑',
                    save:'保存',
                    del:'删除',
                },
            ], 
        }
    }


    clickDel = (ev) => {
        let diannage = ev.target.id;
        let {list} = this.state;
        let list2 = list.concat();
        list2.splice(diannage,1);   
        list2.forEach((e,i)=>{
            e.id = i
        })
        this.setState({
            list:list2
        })
    }
    clickEdit = (ev) => {
        let {list} = this.state;
        console.log(list);
        let list2 = list.concat();
        list2.forEach((e,i)=>{
            if(i == ev.target.id){
                e.ondb = true
            }
        })

        this.setState({
            list:list2
        })
    } 

    clickSave = (ev) => {   
        let {list} = this.state;
        let list2 = list.concat();
        list2.forEach((e,i)=>{
            if(!(e.time && e.job && e.stage && e.report) ){
                alert('请补齐内容');
                return null; 
            }
        })
        
        list2.forEach((e,i)=>{
            if(i == ev.target.id){
                e.ondb = false
            }
        }) 
        this.setState({
            list:list2
        })
    }
    change1 = (ev) => {
        if(!ev.target.value){
            alert('请输入信息')
            return;
        }
        let diannage = ev.target.id
        console.log(diannage);
        let newval = ev.target.value;
        let {list} = this.state;
        let list2 = list.concat();
        list2.forEach((e,i)=>{
            if(i == ev.target.id){
                e.time = newval   
            }
        })
       
        
        this.setState({
            list:list2
        })
    }
    change2 =(ev) => {
        if(!ev.target.value){
            alert('请输入信息')
            return;
        }
        let newval = ev.target.value;
        let diannage = ev.target.id
        let {list} = this.state;
        let list2 = list.concat();
        list2.forEach((e,i)=>{
            if(i == ev.target.id){
                e.job = newval   
            }
        })
        this.setState({
            list:list2
        })
    }

    change3 =(ev) => {
        if(!ev.target.value){
            alert('请输入信息')
            return;
        }
        let newval = ev.target.value;
        let diannage = ev.target.id
        let {list} = this.state;
        let list2 = list.concat();
        list2.forEach((e,i)=>{
            if(i == ev.target.id){
                e.stage = newval      
            }
        })
        this.setState({
            list:list2
        })
    }

    change4 =(ev) => {
        if(!ev.target.value){
            alert('请输入基站信息')
            return;
        }
        let newval = ev.target.value;
        let diannage = ev.target.id
        let {list} = this.state;
        let list2 = list.concat();
        list2.forEach((e,i)=>{
            if(i == ev.target.id){
                e.report = newval
            }
        })
        this.setState({
            list:list2
        })
    }

    clickAdd =(ev) =>{
        
        let {list} = this.state;
        console.log(list.length)
        // if(list.length>=7){
        //     alert('任务太多了，清理一下再添加吧');
        //     return;
        // }
        let list2 = list.concat();
        list2.push(
            {
                id:list.length,
                time:'',
                job:'',
                stage:'',
                report:'',  
                ondb:true,
                edit:'编辑',
                save:'保存',
                del:'删除',
            },
        );
        this.setState({
            list:list2
        })
    }

    render(){
        let {list} = this.state;
        let li = list.map((e,i)=>{
            if(e.ondb){
                return (
                    <li className='todolineEdit' id={e.id} key={i}>
                        <span  className='show' >{e.time}</span>                    
                        <input className='edit' id={e.id} value={e.time}  onChange = {this.change1} />   
    
                        <span  className='show' >{e.job}</span>                    
                       
                        <input className='edit' id={e.id} value={e.job}  onChange = {this.change2} /> 

                        <span  className='show' >{e.stage}</span>                    
                        <input className='edit' id={e.id} value={e.stage}  onChange = {this.change3} /> 
    
                        <span  className='show' >{e.report}</span>                    
                        <input className='edit' id={e.id} value={e.report}   onChange = {this.change4} />   
                        <div className='todoButton'>
                            <button onClick={this.clickEdit} id={e.id}>{e.edit}</button>
                            <button onClick={this.clickSave} id={e.id}>{e.save}</button>
                            <button onClick={this.clickDel} id={e.id} >{e.del}</button>   
                        </div>      
                    </li>
                )
            }
            else {
                return (
                    <li className='todolineNormal'  id={e.id} key={i}>
                        <span  className='show' >{e.time}</span>                    
                        <input className='edit' id={e.id} value={e.time}  onChange = {this.change1}/>   
    
                        <span  className='show' >{e.job}</span>                    
                        <input className='edit'  id={e.id} value={e.job}  onChange = {this.change2}/> 
    
                        <span  className='show' >{e.stage}</span>                    
                        <input className='edit' id={e.id} value={e.stage}  onChange = {this.change3} /> 
    
                        <span  className='show' >{e.report}</span>                    
                        <input className='edit' id={e.id} value={e.report}   onChange = {this.change4}/>   
                        <div className='todoButton'>
                        <button onClick={this.clickEdit} id={e.id}>{e.edit}</button>
                        <button onClick={this.clickSave} id={e.id}>{e.save}</button>
                        <button onClick={this.clickDel} id={e.id}>{e.del}</button>  
                        </div>      
                    </li>
                )
            }

        })
       
        

        return ( 
            <div className="projectStation">
                <div className="projectTittle">
                    <div className="tL">
                        <i className="fa fa-wifi fa-lg"></i>
                        <span>基站信息</span>
                    </div>
 
                </div>
                <div className="projectContent">                       
                    <span className="todoFirst">基站名称</span>
                    <span className="todoFirst">载波数量</span>
                    <span className="todoFirst">基站类型</span>
                    <span className="todoFirst">基站地址</span>
                    <span className="todoFirst">操作</span>
                </div>
                        
                {li}
           
                                
                <div className='projectfixBottom' onClick = {this.clickAdd}>
                    <span>+ 新增站点信息</span>
                </div>
            </div>

        )
    }
}

 
export default StationTable;


