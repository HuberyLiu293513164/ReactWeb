import React,{Component} from "react";
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="todo">
                            <div className="todoTittle">
                                    <div className="tL">
                                        <i className="fa fa-paper-plane fa-lg"></i>
                                        <span>待办事项</span>
                                    </div>
                                    <div className="tR">
                                            <img src={require("../img/avatar-mini4.jpg")}/>
                                            <span>Administrator</span>
                                    </div>
                            </div>
                            <div className="todoContent">
                                <span className="todoFirst">完成时间</span>
                                <span className="todoFirst">事项</span>
                                <span className="todoFirst">类型</span>
                                <span className="todoFirst">汇报人</span>

                                <span className="todoline">今天</span>
                                <span className="todoline">网页开发</span>
                                <span className="todoline">进行中</span>
                                <span className="todoline">PM</span>

                                <span className="todoline">今天</span>
                                <span className="todoline">网页开发</span>
                                <span className="todoline">进行中</span>
                                <span className="todoline">PM</span>

                                <span className="todoline">今天</span>
                                <span className="todoline">网页开发</span>
                                <span className="todoline">进行中</span>
                                <span className="todoline">PM</span>

                                <span className="todoline">今天</span>
                                <span className="todoline">网页开发</span>
                                <span className="todoline">进行中</span>
                                <span className="todoline">PM</span>

                                <span className="todoline">今天</span>
                                <span className="todoline">网页开发</span>
                                <span className="todoline">进行中</span>
                                <span className="todoline">PM</span>

                                <span className="todoline">今天</span>
                                <span className="todoline">网页开发</span>
                                <span className="todoline">进行中</span>
                                <span className="todoline">PM</span>

                                <span className="todoline">今天</span>
                                <span className="todoline">网页开发</span>
                                <span className="todoline">进行中</span>
                                <span className="todoline">PM</span>

                                <span className="todoline">今天</span>
                                <span className="todoline">网页开发</span>
                                <span className="todoline">进行中</span>
                                <span className="todoline">PM</span>

                            </div>

                        </div>

        )
    }
}
 
export default Todo;