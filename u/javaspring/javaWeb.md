Java方向

  Java基础+Java高级+数据库+Web前端

  JavaWeb+**框架**

Java大数据

### 一、   JavaWeb概述

 Client/Server架构

 Browser/Server架构

### 二、 Web服务器

 学习Web开发，服务器是必不可少的

 Web开发需要使用的服务器软件：

1. WebLogic是BEA公司的产品，也是目前Web开发使用最广泛的服务器

2.   WebSphere是IBM公司的产品

3. Tomcat服务器，在中小型的应用系统中使用广泛，开源免费的。Apache公司的产品。

### 三、Tomcat服务器的安装配置

1.  Tomcat的下载

   下载地址:http://tomcat.apache.org/

   1.  tar.gz文件是Linux操作系统的版本

   2. zip文件是Windows操作系统下的压缩文件是Tomcat的免安装版本

      ​    [64-bit Windows zip](https://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-7/v7.0.108/bin/apache-tomcat-7.0.108-windows-x64.zip)是64位压缩版本

   3.  [32-bit/64-bit Windows Service Installer](https://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-7/v7.0.108/bin/apache-tomcat-7.0.108.exe)是Windows操作系统的安装版

      Tomcat服务器运行需要JDK的支持

      Tomcat5 jdk4以上

      Tomcat6 jdk5以上

      Tomcat7 jdk6以上

2.   介绍一下Tomcat的目录结构

1.  bin目录 – 存放Tomcat启动的文件命令

2.  conf目录 – tomcat的配置文件，最重要的是server.xml

3. **webapps目录 **– 存储web项目

### 四、Servlet技术

1. servlet是什么？

   Servlet是sun公司提供的一门用于开发动态web资源的技术。

   Servlet可以在**服务器**端接受浏览器端发送过来的请求，也可以向浏览器端响应内容。

2. 使用开发工具开发一个HelloServlet
   1. 新建一个web项目

   2. 新建包，在包下创建HelloServlet类

   3. 让HelloServlet去继承HttpServlet，调出service方法，在service方法完成服务器端要完成的功能、（HttpServlet是java提供的，具有接受请求和响应的功能，HelloServlet继承以后，作为子类也具有这些功能了）

   4. 在web.xml文件中配置HelloServlet

   5. 将Tomcat服务器部署到myeclipse开发工具中

   6. 将写好的web项目部署到Tomcat服务器中，部署成功以后，在会webapps目录中发现部署的web项目

   7. 打开浏览器访问

      ```tex
      http://localhost:8080/web项目/url地址
      http://localhost:8080/servlet/hello
      ```

3. servlet的调用过程

   1. 浏览器地址栏输入地址回车的时候，会向服务器端发送请求

   2. 服务器端先检查web应用中的web.xml文件，会根据配置找到哪个servlet来执行

   3. Servlet执行，serivce方法就会执行

      浏览器-->服务器—>浏览器

      B-->S-->DB-->S-->B

4.  servlet的配置细节

   1. 基本配置

      ```xml
      <servlet>
         <servlet-name></servlet-name>
      <servlet-class></servlet-class>
      </servlet>
      <servlet-mapping>
         <servlet-name></servlet-name>
      <url-pattern></url-pattern>
      </servlet-mapping>
      ```

      一对`<servlet>`可以对应多对`<servlet-mapping>`

   2. 星号通配符的使用

      可以使用\*配置`<servlet-mapping>`

      1. `*.+`内容的配置

         ```xml
         <url-pattern>*.do</url-pattern>
         ```

      2. `/开头的，以/*结尾的路径写法`

         ```xml
         <url-pattern>/test/*</url-pattern>
         http://localhost:8080/servlet/test/xxweb名/url路径
         ```

      3. `缺省/默认servlet`

         当没有对应的url-pattern的时候，可以执
         行缺省servlet，如果不配置缺省servlet，就报404错误

         ```xml
         <url-pattern>/</url-pattern>
         ```

5. HttpServletRequest对象

   获取浏览器发送过来的请求包含的信息/数据

   1. 过request对象来获取浏览端相关的信息

   2. 通过request对象来获取请求参数

      1.  request.getParameter(name)→value

         localhost:8080/servlet/register?username=zs&pwd=123

         name=value方式传值

      2. request.getParameterValues(name)

         返回String[]数组

         根据name获取多个value的值

      3. request.getParameterNames()

         返回Enumeration[]枚举类型

         获得所有参数中name的值

   3.  通过request对象设置参数中中文乱码问题

      - 出现中文乱码的原因：

        从浏览器端提交表单的数据到服务器端，浏览器端的页面设置的一般是utf-8编码，tomcat服务器默认的编码是iso8859-1编码，该编码中没有中文，所以会用？？代替

      1.  get请求处理中文乱码的方式

         getBytes(“iso8859-1”)解码

         new String(xx,”utf-8”)编码

      2. post请求处理中文乱码的方式

         request.setCharacterEncoding(“utf-8”)

   4. 请求**转发** **–** **不带请求包含**

      1. 概念：服务器端的servlet可以将未完成的工作交给下一个组件(servlet或者jsp)继续完成

      2. 特点：转发为了实现资源的跳转，浏览器地址栏的内容不会发生变化，不管转发给几个组件完成，浏览器地址栏看到的是第一个组件的地址

      3. 代码执行

         1. 获得转发器

            ```java
            RequestDispatcher rd=   request.getRequestDispatcher("url-pattern地址");
            ```

         2. 转发

            ```java
            rd.forward(request,response);
            ```

   5. 请求转发 – 实现请求包含

      1. 概念：访问ServletA，由Servlet请求转发给ServletB，如果是实现的请求包含的转发，ServletA会将ServletB包含进来，由A和B共同处理这个请求。

      2.  代码实现

         1. 获得转发器

            ```java
            RequestDispatcher rd= request.getRequestDispatcher("url-pattern地址");
            ```

         2. 转发—请求包含

            ```java
            rd.include(request,response);
            ```

   6.  request对象可以作为域对象来使用

      域对象：一个对象具有可以被看见的范围，可以在域对象中存储资源，实现资源的共享

      ```java
      request.setAttribute(String name,Object obj);
      ```

      往request域对象中存储数据，把obj存储到request中，命名为name

      ```java
      request.getAttribute(String name);//返回Object obj
      ```

      域：指的是作用域范围，request作为域对象的作用域范围是一次请求。

      一次请求中可以使用request实现资源共享。

6. HttpServletResponse对象

   - HttpServletRequest对象接收浏览器发送过来的请求
   - HttpServletResponse对象向浏览器端响应

   1. 获取输出流，向浏览器端(网页)输出内容

      ```java
      PrintWriter pw=response.getWriter();
      pw.println(“”);
      ```

   2. 设置响应头

      ```java
      response.setHeader(String name, String value)
      ```

      1.  设置浏览器显示中文的编码

      2.  定时刷新—实现一段时间后页面自动跳转

      3. 设置中文显示在页面中的编码

         ```java
         response.setCharacterEncoding(“编码”); 
         ```

         指定服务器向浏览器端发送中文时使用的编码

         ```java
         response.setContentType(“text/html;charset=编码”)
         ```

           设置浏览器端(页面)显示中文的编码

      4. 重定向

         ```java
         response.sendRedirect(“路径”)
         ```

         - 重定向概念：

           用于服务器内部的资源跳转，也可以用于不同应用和不同服务器之间的跳转。

           浏览器地址栏会发生变化，两次请求。

           当一个组件已经完成了，只是单纯的跳转到下一组组件，选择使用重定向。

         - 转发概念：

           用于服务器内部的资源跳转，但是只能是同一web应用中的资源跳转。

           浏览器地址栏不会发生变化，一次请求。

           一个组件还没有完成，需要交给下一个组件继续完成，还需要传参数，选择使用转发。

7. ServletConfig和ServletContext对象

   1. ServletConfig对象

      - 代表当前Servlet在web.xml文件中配置信息对象

      1. 获得ServletConfig对象

         ```java
         ServletConfig scf=this.getServletConfig();
         ServletConfig scf=getServletConfig();
         ```

      2. 功能

         1. 获取当前Servlet在web.xml文件中配置的初始化参数

            ```xml
            <servlet>
               <init-param>
                   <param-name>xx</param-name>
                   <param-value>xx</param-value>
               </init-param>
            </servlet>
            ```

         2. 获得ServletContext对象

            ```java
            ServletContext sct=scf.getServletContext();
            ```

   2. ServletContext对象

      - 代表当前Web应用对象

      - 在web应用被加载以后，服务器会立刻创建当前web应用的ServletContext对象，该对象创建以后会一直留在内存中，直到服务器关闭或者web应用被移出服务器。
      - ServletContext会随着web应用的销毁而销毁。

      1. 如何获取ServletContext对象

         ```java
         ServletContext sct=this.getServletContext();
         ServletContext sct=getServletContext();
         ```

      2. 功能

         1. 获得web应用的初始化参数

            - 在当前Servlet中配置的参数信息，只能在当前Servlet中通过ServletConfig对象来获取，在其它的Servlet中无法获取这些参数信息。
            - 需要配置的初始化参数能被所有的Servlet共享访问，需要参数属于整个web应用，可以将初始化参数配置到web.xml的根目录下，可以使用ServletContext来获取。

            ```xml
            <context-param>
                <param-name>data1</param-name>
                <param-value>value1</param-value>
            </context-param>
            ```

         2. ServletContext可以作为**域对象**来使用可以作为域对象存储数据，实现数据的资源共享，ServletContext的作用域范围是整个Web应用。

            ServletContext可以在整个Web应用实现资源共享，request只能在一次请求中实现资源共享。

            ```java
            setAttribute(String name,Object obj)
            getAttribute(String name)--->obj
            ```

         3. 获得web资源的路径

             sct.getRealPath(“”) -->String path路径

            根据所在的环境拼接当前web应用跟磁盘目录的一个完整路径。这种路径为动态获取，换个环境，也能够获取正确的路径。

8. 会话技术

   1. 什么是会话？

      用户打开一个浏览器，访问服务器端多个web资源，然后关闭浏览器，整个过程称之为一个会话。

   2. 如何来保存会话过程中产生的数据

      - 每个用户在使用浏览器与服务器进行会话过程中，不可避免各自会产生一些数据，这些数据有时候需要保存下来，比如用户登录过后，应该保存一个用户的状态，会话结束前(关闭浏览器前)表示用户一直是登录状态，并且不同的用户之间的登录状态应该互不影响。

      - 已经学习过的域对象：request和ServletContext

      - request域太小，request是一次请求中保存数据，获取数据。在多次请求响应中都是新的request请求，之前存入request域中的数据，在一次请求结束后也销毁了。

      - ServletContext域太大了，所用的用户都操作这个域，太混乱了。

   3. Cookie技术

      1. Cookie概念

         - Cookie的原理是通过Set-Cookie响应头和Cookie请求头将会话中产生的数据保存在浏览器端。

         - 浏览器请求服务器，服务器将需要保存的数据通过Set-Cookie响应头发送到浏览器端，浏览器端接收到数据会保存到浏览器的内部。

         - 当浏览器再次请求服务器的时候，通过Cookie请求头将上次保存的数据在带给服务器，服务器通过Cookie头来获取数据，通过这种方式可以保存会话中产生的数据。
         - Cookie技术是将需要保存的数据保存在了浏览端，是一种浏览器端(客户端)技术，每个客户端各自保存自己的数据，再次访问服务器端的时候客户端会带着自己的数据，这样就不会产生混乱的现象了。

      2. Cookie的常用方法

         1.  创建Cookie

            ```java
            Cookie cookie= new Cookie(String name,String value);
            ```

         2. 添加Cookie

            ```java
            response.addCookie();
            ```

            - 将name=value保存到Cookie中，Coolie保存到浏览器中

         3.  获取Cookie

            ```java
             Cookie[] cs=request.getCookies();
            ```

         4. 设置cookie的存活时间
            - setMaxAge(秒)
            - 如果不设置，默认情况下Cookie在关闭浏览器的时候，会将存储的数据销毁。
            - setMaxAge()可以设置Cookie的存活时间，在有效时间内，关闭浏览器，Cookie保存的信息还会一直在。

         5.  设置Cookie的路径

            - setPath(String path)
            - 如果没有设置路径，默认是当前发送Cookie的Servlet所在的路径`（/servlet）`
            - 如果设置路径，可以在设置的路径极其子路径下可以正常使用Cookie

         6.  删除Cookie

            - 没有直接删除Cookie的方法

            -  如果想删除一个Cookie，可以从服务器向浏览器发送一个<font style="color:red">同名，同Path</font>的Cookie，只需要将Cookie的maxAge()设置为0即可。

   4. Session技术

      1. 概念

         - Session技术是将会话中产生的数据保存在了服务器端，是一种服务器端的技术。
         - 浏览器访问Web服务器端时候，服务器会为每一个浏览器单独创建一个Session对象，该对象有一个ID属性，唯一，称之为SessionID，并且服务器端会将SessionID发送给浏览器端，会话中产生的数据是保存在服务器端的Session中。
         - 当浏览器再次访问Web服务器的时候，会将SessionID也发送给服务器端，服务器会根据SessionID查找Session对象。

      2. Session的常用方法

         1. 获取Session对象

            ```java
            HttpSession session=request.getSession();
            ```

         2.  使用Session对象存，取值

            ```java
             session.setAttribute(name,value);
            
             session.getAttribute(name); -->value
            ```

         3. 设置Session的时间

             Session默认存活时间为30分钟

             在web.xml根目录下配置

            ```xml
            <session-config>
                <session-timeout>30</session-timeout>
             </session-config>
            ```

         4. 销毁Session

            ```JAVA
            session.invalidate();
            ```

         5. Cookie和Session的比较：

            1. Cookie是将会话中产生的数据保存在浏览器端，是浏览端的会话技术；

            2. Session是将会话中产生的数据保存在服务器端，是服务器端的会话技术； 

            3. Cookie保存的信息的时间比较长，但是安全性不高，可能随着用户的操作，Cookie会被清空，Cookie中存的数据也没有了。

            4. Session通常保存信息的时间比较有限，但是安全性较高。因为Session是将数据保存在服务器端，不会随着用户的操作导致Session中存储的数据意外丢失。

---

   JavaSE  C/S C结构 桌面级程序应用

​       Java基础+Java高级

   **JavaEE  B/S**结构  **互联网程序应用**

​       **B**：HTML CSS JS JQuery ajax jsp**

​       **S**：数据库，servlet技术** **框架**

---

### 五、 JSP技术

1. JSP介绍

   - Java Server Page java服务器端的页面技术

   - JSP是由Sun公司提供的动态Web资源的开发技术，看起来非常像HTML，但是可以在JSP中写Java代码，而HTML不可以。

   - JSP的出现主要是为了解决Servlet在响应到页面内容时不合适、繁琐的问题。

   - HTML-->文档，只能写标签，通过标签显出出来一个页面的内容。

   -  CSS写在HTML文档中，负责样式

   - JavaScript写在HTML文档中，负责交互

   -  JSP包含

     ​    HTML、CSS、JavaScript、Java代码…

2. 编写JSP以及JSP的文档结构

   Step1：写一个.jsp结尾的文件

   Step2：在.jsp结尾的文件中包含如下内容：

   1.  HTML(CSS、JS、JQuery)

   2.  **Java****代码**

   3.  注释

   4. **指令**

   5.  **隐含对象(9个)**

3.  JSP页面中的Java代码

   - 两种方式：

     1. jsp表达式写法

        语法：`<%= …  %>`

        内容：变量以及运算符组合的表达式，常量值，有返回值的方法等。

        功能：将内容输出在页面上，=是输出的功能。

     2. jsp脚本片段写法

        语法：`<% ….  %>`

        内容：java代码块/代码片段

        功能：通过代码片段完成的一个功能

4.  JSP页面中的指令

   - 语法：

     ```jsp
     <%@指令名 属性1=值1 属性2=值2 ... %>
     ```

   1. page指令

      `pageEncoding=”编码”` 设置jsp文件保存中文时的编码

      `import=””`  在jsp页面中导包

   2. include指令

      功能：能够将其他页面包含进来，可以是jsp文件，也可以是html文件。

      语法：`<%@include file=”xx文件” %>`

   3. taglib指令

      语法：`<%@taglib uri=”” prefix=”” %>`

      JSTL标准标签库

5.  JSP页面中的注释

   1. `<!-- 注释的内容 -->`

         Html注释，注释中的内容包含java代码，这些java代码会被执行的。

   2. `<%-- 注释的内容 --%>`

        JSP注释，如果注释的内容中包含java代码，这些java代码会被忽略掉。

6. 基于MVC设计模式，使用Servlet+JSP完成EMS项目

   - MVC设计模式

     |      |                  |                                                              |
     | :--- | ---------------- | ------------------------------------------------------------ |
     | M    | Model模型层      | Dao工厂（提供方法，这些方法完成相应业务的功能） 数据库的相关操作 com.lddx.dao |
     | V    | View视图层       | JSP技术(html css..)WebRoot下                                 |
     | C    | Controller控制层 | Servlet技术  com.lddx.web                                    |

7. JSP中的隐含/隐式对象

   - 可以不需要在JSP中预先定义就可以直接使用，共9个隐含对象：

     |             |                     |
     | ----------- | ------------------- |
     | request     | 请求信息            |
     | response    | 响应信息            |
     | out         | 输出的数据流        |
     | session     | 会话                |
     | application | 全局的上下文对象    |
     | pageContext | JSP页面的上下文对象 |
     | page        | JSP页面本身         |
     | config      | Servlet的配置对象   |
     | exception   | 捕获网页异常        |

   1. request隐含对象

      1. 获得请求参数

      2. 作为域对象存取值

         ```jsp
         <!-- 1）获得请求参数 -->
         id:<%=request.getParameter("id")%>
         <br/>
         name:<%out.println(request.getParameter("name"));%>
         
         <hr/>
         <!-- 2）作为域对象存取值 -->
         <%
             request.setAttribute("age",100);
             request.getRequestDispatcher("MyJsp03.jsp")
                   .forward(request, response);
         %>
         ```

      3. 获取Cookie对象

         ```jsp
         <!-- 使用隐含对象request获取Cookie -->
         <%
         Cookie[] cs=request.getCookies();
         for(Cookie c:cs){
             out.println(c.getName()+","+URLDecoder.decode(c.getValue(),"utf-8") +"<br/>");
         }
         %>
         ```

   2. response隐含对象

      1. 重定向

         ```jsp
         <!-- 1）重定向 -->
         <%
         //response.sendRedirect("index.jsp");
         //重定向到ems_jsp应用的list首页
         //response.sendRedirect("/ems_jsp/list");
         //重定向百度首页
         response.sendRedirect("http://www.baidu.com");
         %>
         ```

      2. 处理HTTP文件头

         1. 设置网页自刷新

             response.setHeader(“refresh”,”1”)

         2. 定时跳转页面

            response.setHeader(“refresh”,”5;URL=xx”);

   3. application隐含对象

      - application对象用于保存所有应用程序的共有数据，属于整个web应用。

      - 在服务器启动时自动创建，在服务器停止时自动销毁。

      - 和ServletContext的功能是一样的。

      1. 在web.xml文件配置全局参数，使用application对象获取

      2. 作为域对象存取值

         ```java
         application.setAttribute();
         application.getAttribute();
         ```

   4.  pageContext隐含对象

      - 获取页面上下文对象，可以通过pageContext在JSP页面中获取request,response等对象，在实际开发中应用中使用较少，因为request，response本身也是隐含对象，直接使用就可以。

      - 一般使用pageContext是作为域对象来使用。

        ```java
        pageContext.setAttribute()
        pageContext.getAtrribute()
        ```

        pageContext域对象存取值只能在当前页面中获取，作用域的范围是当前页面。

   5. session隐含对象

      - 域对象：存取值，作用域是一次会话中的范围（从打开浏览器到关闭浏览器结束）

      ```java
      session.setAttribute();
      session.getAtrribute();
      ```

      - pageContext<request<session<application

   6. page隐含对象

      - page对象代表JSP本身，只有在JSP页面内才是合法的。可以看作this关键字的别名。使用较少，了解。

   7. config隐含对象

      - 用于web.xml的配置信息，和ServletConfig功能一致。

   8. exception隐含对象

      - exception对象用来处理JSP文件执行时发生的所有异常。需要在page指令设置isErrorPage的属性值为true才可以使用exception对象。

        `<%@page isErrorPage=”true” %>`使用exception对象

        `<%@page errorPage=”” %> ` 制定显示异常信息的页面

8. 四大域对象

   - pageContext、request、session、application是JSP页面的4大域对象。

   - 作用域的范围由小到大为:

     ​	pageContext<request<session<application

     | 域对象      | 作用域                                                       |
     | ----------- | ------------------------------------------------------------ |
     | application | 有效范围是整个web应用，整个应用指的是从应用启动到应用结束。  |
     | session     | 有效范围是当前会话，所说的当前会话指的是用户从打开浏览器开始，到关闭浏览器的这个过程。 |
     | reques      | 一次请求跨越的两个页面 （转发）                              |
     | pageContext | 作用范围仅限于用户请求的当前页面                             |

   - 什么时候用什么域对象？

     - 如果数据只在jsp页面中使用，用pageContext

     - 如果数据需要转发时传递，用request
     - 如果数据现在我需要用，过一会我还需要用，用session；
     - 如果数据现在我需要用，过一会别人也需要用，用application；

9. EL表达式和JSTL标准标签库

   1. 为什么要用EL表达式

      在JSP中嵌入了大量的Java代码，增加了页面内容的复杂度，使页面不够简洁，不方便代码的维护，为此sun公司制订了**JSP标签**(类似于HTML标签)代替Java代码。

      Apache组织开发了一套标签库，被sun公司整合后，成为**标准标签库**(jstl)，jstl标准标签库可以配合EL表达式一起使用，减轻JSP页面的复杂度，代替Java代码，使JSP页面更方便维护。

   2. 什么是EL表达式

      EL表达式是一套简单的计算规则，用于给JSP标签（JSTL标准标签库）的属性赋值，也可以单独使用用来计算输出。

      EL表达式可以单独用

      EL+JSTL一起用

      语法：`${…}`

   3.  EL表达式的功能

      1. 输出简单的运算结果

         |           |                   |
         | --------- | ----------------- |
         | 算术运算  | ` + - * / %`      |
         | 逻辑运算  | ` && ||!`         |
         | 关系运算  | `> >= < <= == !=` |
         | empty运算 | 判断是否为空      |

      2. 获取请求参数

         - El表达式可以获得请求中的参数

           Localhost:8080xx?key1=value1&key2=value

         -  语法：

           - 根据一个key获得一个value值`${param.key} `

           - 根据一个key获得多个value值`${paramValues.key[下标]}`

      3. EL表达式可以获取域对象中的数据

         | JSP页面     | el表达式         |
         | ----------- | ---------------- |
         | pageContext | pageScope        |
         | request     | requestScope     |
         | session     | sessionScope     |
         | application | applicationScope |

         setAttribute(key,value)

         getAttribute(key) -->value

         使用el表达式方式获取

         ${key}  -->value

         ${xxScope.key} -->value

      4. EL表达式获取JavaBean的属性

         - 什么是JavaBean？

           JavaBean是对一个类的叫法，该类需要符合一定的规范才叫JavaBean类。

           1.  包含private修饰的私有属性
           2. 包含无参，有参构造方法
           3. 包含对私有属性的get和set方法

   4. jstl标准标签库

      - ①导入standar.jar和jstl.jar
      -  ②使用taglib指令引入jstl标准标签库

      1. `<c:out>`标签：用于输出内容到页面

         ​	 输出常量

         ​      输出作用域中存储的数据

         ​      转义输出

         ​      输出默认值

      2. `<c:set>`标签：设置标签

         ​      向四大域对象中增加域属性

         ​      向Map集合中增加，修改键值对

         ​      修改JavaBean的属性

      3. `<c:remove>`标签：

         ​      标签用于删除四个域对象中的属性

      4. `<c:if>`标签：可以进行条件判断

          执行后达到的效果和Java的if语句比：

         If(){}

         If(){}else{}

      5. `<c:choose> `标签

         ```jsp
         <c:choose> 
             <c:when></c:when>
             <c:when></c:when>
             …
             <c:otherwise></c:otherwise>
         </c:choose>
         ```

         - 实现多种分支情况的判断，类似于java代码中If…else if else if…else的语句结构。

         ```jsp
         		<!-- 使用c:set标签往域对象中设置属性值 -->
         		<c:set var="day" value="3" scope="page"></c:set>
         		${day}
         		<br/>
         		<!-- 使用c:choose进行多种情况的判断 -->
         		<c:choose>
         			<c:when test="${day==1}">
         			       今天是星期一，堵上各种堵车
         			</c:when>
         			<c:when test="${day==2}">
         				今天是星期二，还有4天休息
         			</c:when>	
         			<c:otherwise>
         			       啥也不是
         			</c:otherwise>	
         		</c:choose>
         ```
      
         
      
      6. `<c:forEach>`标签：循环
      
         ​     对集合中的数据进行循环迭代操作；
      
         ​      指定循环次数反复执行的操作；
      
            - **练习：遍历10到100的偶数，如果数字所在的位置是3的倍数，显示成红色的。**
      
              ```jsp
              <!-- 练习：遍历10到100的偶数，
              如果数字所在的位置是3的倍数，显示成红色的。 -->
              <c:forEach begin="10" end="100" step="2" var="i" varStatus="status">
                  <c:if test="${status.count%3==0}" var="f" scope="page">
                      <span style="color:red">${i}</span>
                  </c:if>
                  <c:if test="${!f}">
                      ${i}
                  </c:if>
              </c:forEach>
              ```
      
      7. `<c:forTokens>`标签
      
         用来浏览一字符串中所有的成员，其成员由定义符号所分隔。

10. Servlet过滤器

    1. 什么是过滤器

       - Servlet过滤器具有拦截客户端（浏览器端）请求的功能，Servlet过滤器可以改变请求中的内容来满足实际开发中的需求。

       - 实质上Servlet过滤器就是在Web应用服务器上一个web应用组件，用于拦截浏览器与目标资源（Servlet）的请求，并对这些请求进行一定的过滤处理在发送给目标资源（Servlet）

         <img src="https://cdn.jsdelivr.net/gh/xx025/cloudimg@main/img/20210521172604.png" alt="servlet"  />

       - 说明：web服务器部署了过滤器以后，不仅浏览器端发送的请求会经过过滤器，并且请求发送到目标资源以后，请求的回应信息也同样会经过过滤器。

         ![servle2t](https://cdn.jsdelivr.net/gh/xx025/cloudimg@main/img/20210521172740.png)

       - 当一个过滤器不能满足实际业务需求的时候，可以配置部署多个过滤器进行处理，这样就组成了一个**过滤器链**。

    2. 过滤器的创建与配置

       1. 写一个类实现Filter接口，这个类就变成了一个过滤器类
       2. 在web.xml文件中配置这个类

    3. 写一个示例代码

11. 监听器

    1. 概念

       监听器是Servlet技术中三大组件之一，Servlet、过滤器、监听器。

       使用监听器来监听Web应用执行过程中相关的事件来进行对应的处理。

    2. 开发监听器的步骤

       1. 写一个类实现监听器接口
       2. web.xml文件中配置该类
       3. 监听三大作用域创建和销毁的监听器

    - JSP页面：pageContext request session application

      Servlet:  无   request session ServletContext

      1.  ServletContextListener监听器

          思路：写一个类实现这个监听器

          在web.xml配置这个类

      2. HttpSessionListener监听器

         负责监听session对象的创建和销毁

         Servlet: HttpSession session=request.getSession();

         JSP: session隐含对象

      3.  ServletRequestListener监听器

         - 负责监听request的创建和销毁

         1. 让类实现该接口
         2. Web.xml中配置

      4. 监听三大作用域中属性增加、修改、删除的监听

         ```java
         SrvletContextAttributeListener
         HttpSessionAttributeListener
         ServletRequestAttributeListener(举例)
         ```



---



### 当当网项目：

|      |        |                                                         |
| ---- | ------ | ------------------------------------------------------- |
| M    | 模型层 | com.lddx.dao 业务(数据库)  com.lddx.entity javabean对象 |
| V    | 视图层 | WebRoot下   页面(jsp)                                   |
| C    | 控制层 | com.lddx.web  servlet                                   |
|      | 其他   | com.lddx.test  开发中测试用的                           |
|      |        | com.lddx.util  工具包（DBUtil)                          |

1. 当当网首页的功能

    （所有的图书显示在首页的页面上）

   1. 数据库中用到库dang，表d_book，和数据准备好
   2. C控制层 - - XXservlet
   3.  M模型层 -- XXDao
   4.  V视图层 -- Booklist.jsp

2. 节省金额的小数位数处理一下

3. 分页查询

4. 注册页面

   1. 验证码
   2. 邮箱、昵称等验证
   3.  注册功能

5. 登陆页面

   1. 邮箱，密码不正确的登录验证
   2. 邮箱，密码正确的登录功能
   3. 登录成功，欢迎昵称
   4. 退出的功能

6. 购物车的相关功能

   1. 首页点击购买的功能



---



### 正则表达式

1. 字符相关的语法

   [abc]  a b c中任意一个字符

   [^abc] 除了a b c的任意字符

   [z-z]  a到z中的任意一个字符

   [a-zA-Z0-9]  a到zA到Z0到9任意一个字符

   [0-9] 0-9任意一个数字

   [\u4E00-\u9FA5]  任意一个汉字

2. 预定义字符集

   **. **任意一个字符

   \d  任意一个数字字符，相当于[0-9]

   \w  单词字符，相当于[a-zA-Z0-9]

   \s   空白字符

3. 数量

   X?   表示0个或者1个

   X*   表示0个或者任意多个

   X+   表示1个到任意多个（大于等于1个）

   X{n}  表示n个

   X{n,}  表示n到任意多个（大于等于n个）

   X{n,m}  表示n到m个

4. 边界匹配

   ^代表开始

   $代表结尾

   

**邮政编码的正则表达式：****277000**

写法1：[0-9][0-9] [0-9] [0-9] [0-9] [0-9]

写法2：\d\d\d\d\d\d

写法3：\d{6}  [0-9]{6}

|或者 ()分组   



**手机号码的正则表达式**：+86 13844322452

​           0086 13844322452

(\+86|0086)?\s?\d{11}

Java中matches方法进行正则验证

String.matches(正则表达式)：返回boolean类型的结果