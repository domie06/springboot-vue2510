const base = {
    get() {
        return {
            url : "http://localhost:8080/shujukuxitongkecheng/",
            name: "shujukuxitongkecheng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shujukuxitongkecheng/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "《数据库系统原理》课程平台"
        } 
    }
}
export default base
