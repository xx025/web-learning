##选择 填空 简单 编程(少)

JavaWeb（Servlet+JSP(el jstl)）

框架（Spring+SpringMVC+MyBatis）

   Ioc DI aop

---



## 第一部分:Spring框架概述，Spring，IOC，单例，多例，懒加载，依赖注入DI

 Spring IOC DI --配置文件的方式

### 一、Spring概述+约束引入

1. 框架概述

   - 所谓的框架其实就是程序的架子，在这个程序的架子中，搭建起程序的基本的骨架，针对程序的通用问题给出便捷的解决方案，可以是开发人员基于框架快速开发具体的应用程序。
   - 例子：老房子  servlet+jsp dangdang
   - 大楼   框架

2. 创建的框架

   - 早期框架 SSH
     -  Struts2（不安全）
     -  Spring
     -  Hibernate（理念，性能低，复杂）
   - 现在框架 SSM
     -  SpringMVC  **
     -  **Spring    \**\***
     -  MyBatis   *

3. Spring框架概述

   - Spring是一个在业务层（M层）使用的开源框架，可以整合许多其它的框架进行开发工作。
   - Spring的主要技术**IOC(DI)**和**AOP**
   - IOC(DI) -- 控制反转(依赖注入)
     - 简单来说IOC它来完成对象的创建和销毁
     - 以前：Book b=new Book();
     - IOC：Book b; 告诉IOC我要用Book
   - IOC主要用来解耦和
   - AOP -- 面向切面编程
   - 也是为了解耦和，层与层加入切面代码

4. IOC的入门案例（**环境、约束**）

   1. 下载Spring

      访问Spring官网，下载Spring的相关包https://spring.io/

      ![image-20210521180249922](https://cdn.jsdelivr.net/gh/xx025/cloudimg@main/img/20210521180252.png)

      docs文档  libs jar包  schema约束

   2. 新建一个普通的java项目

   3. 导入spring开发需要的jar包

      （来发IOC需要用到7个jar包）

      ![image-20210521180439778](https://cdn.jsdelivr.net/gh/xx025/cloudimg@main/img/20210521180441.png)、

   4. Spring开发需要一个专门的配置文件，文件名和位置任意，但是一般定义在src目录下，文件名一般叫applicationContext.xml

   5. Spring的配置文件不知道怎么写，需要引入Spring约束（schema）???

   6. 制定xml模版



### 二、 IOC基本概念和原理

1. IOC（DI）概念

   - 所谓的IOC称之为**控制反转**，简单来说将对象的创建的权利以及对象的生命周期的管理过程交给Spring框架来处理，从此在开发过程中不再需要关注对象的创建和生命周期的管理，而是在需要时由Spring框架来提供，这个由Spring框架管理对象创建和生命周期的机制称之为控制反转。
   - DI：依赖注入，在创建对象的过程中Spring可以依据配置对对象的属性进行设置，这个过程称之为依赖注入，DI。

2. 创建IOC的例子

3. IOC的实现原理

   - 在初始化一个Spring容器时，Spring会解析指定的xml文件，当解析到其中的`<bean>`标签时，会根据该标签的class属性指定的类的全路径名，通过反射机制反射该类的对象，将该对象存入内置的Map中管理。Class.forName(“com.lddx.domain.Person”); -->Person类

   - Map.put(“person”,new Person());

     当context.getBean(“person”)方法从容器中获取对象时，相当

     Map.get(“person”)

     Map.get(“person”)

   - 由此可以推出结论：

     1. 默认情况下，多次获得同一个id的bean，得到的是同一个对象。
     2. 即使是同一个类，如果配置过多个<bean>标签具有不同的id，通过id获得的对象是不同的对象。
     3. 在配置文件中如果配置多个<bean>标签同时具有相同的id，会报错误的。

4. IOC获取对象的方式

   1. **通过bean的id来获取**
   2. 通过class来获取对象
   3. 通过别名来获取对象

### 三、SpringIOC创建对象的方式

1. **通过类的无参构造方法创建对象**
   - 说明：这种方式下Spring创建对象，要求类必须有无参构造，否则的话无法获取创建对象而报异常。
2. 通过静态工厂创建对象
   - 说明：很多的时候，如果类因为各种情况类无法提供无参构造方法，此时Spring容器无法通过无参构造创建类，可以使用静态工厂的方式创建类。
   - 简单点说：把创建对象的过程封装在静态工厂中(类)。
3. 通过实例工厂创建对象
   - 实例工厂也可以理解为类无法通过无参构造创建，来使用的一种方式。
   - 解决思路和静态工厂类似，只不过实例工厂提供的方法不是静态方法
4. 通过Spring工厂创建对象
   - （FactoryBean接口）  
   - Spring内置了工厂接口，也可以通过实现这个接口来开发Spring工厂，通过这个工厂来创建对象

### 四、 单例模式和多例模式

- Spring容器管理的bean在默认情况下是单例的，也就是说一个bean只会创建一个对象，存在内置的map中，之后无论获取多少次该bean，都返回同一个对象。Spring默认采用单例模式，减少了对象的创建，从而较少了内存的消耗。但是在实际开发中是存在多例的需求的，Spring也可以设置bean为多例模式。

- 底层单例的实现方式：

  ```java
  Person
  <bean id=”person” class=”com..Person”> 
  Person p=new Person();
  map.put(“person”,p);
  context.getBean(“person”);  -->p
  context.getBean(“person”);  -->p
  ```

- 总结：

  1. bean在单例模式下的生命周期：

     bean在单例模式下，Spring容器启动时解析xml文件发现bean标签，直接创建bean的对象，然后存入到内部的map中保存，此后无论调用多少次getBean()获取该bean都是从map中取出来的该对象，一直是一个对象。此对象一直被Spring容器持有，直到Spring销毁对象也被销毁。

  2. bean在多例模式下的生命周期：

     bean在多例模式下，Spring容器启动时解析xml文件发现bean标签，只是将bean进行管理，并不会创建bean，此后每次使用getBean()获取bean时，Spring会重新创建该对象并返回，每次都是一个新对象。

     这个对象Spring容器不会持有它，什么时候销毁取决于使用该对象的用户自己决定的。

### 五、懒加载

- Spring默认会在容器初始化的过程中，解析xml文件，并将单例的bean创建并保存到map中，这样的机制在bean比较少时问题不大，一旦bean非常多的时候，Spring需要在启动的过程中花费大量的时间来创建bean，花费大量的空间存储bean，但是这些bean可能很久都用不上，这种在启动时在时间和空间上的浪费显得非常不值得了。

- Spring提供了懒加载机制来解决这个问题。所谓的懒加载机制就是可以指定bean不在Spring容器启动的时候创建，而是在**后续第一次用到的时候才创建**，从而减轻在Spring容器启动过程中对时间和空间的消耗。

  懒加载机制只对单例模式下的bean起作用，对于多例模式下的bean设置懒加载没有任何的意义。

- lizy-init=”true”bean就变懒，进行懒加载

  ​		false  不懒加载，默认

  ​       default 是否懒加载取决于

  ​		`<beans>`标签中的配置

- 总结：

  1. 单例模式下未设置懒加载

     - (先买车放着，以后想开车在开)
     - Spring容器初始化的时候就会先创建bean，等以后getBean()的时候在用，造成时间和空间的浪费。
     2. 单例模式下设置懒加载
        - (先不买车，等驾照到手马上买车，以后想开车在开)
        - Spring容器初始化的时候不会创建bean，等第一次调用getBean()的时候创建bean，放入map中存储，等在次调用getBean()的时候从map中取就可以了。
        - 车就一辆，创建的bean就创建一次
  3.  多例模式 --不考虑懒加载
     - （每次想开车就买新车）
     - Spring容器初始化的时候不会创建bean，每一次调用getBean()的时候创建一个新的bean。

  |      |      |                                             |
  | ---- | ---- | ------------------------------------------- |
  | 单例 | 不懒 | 容器加载创建 加入map，一直是同一个对象      |
  | 单例 | 懒   | 第一次用到时创建 加入map， 一直是同一个对象 |
  | 多例 | -    | 每次使用单独创建 不加map 每次都是新对象     |

  - 当多个bean都需要设置懒加载的情况：

    default-lazy-init="true"

### 六、Spring容器的初始化和销毁

- Spring容器初始化的时候做一些创建，

  连接的操作；

  **init-method=””在Spring初始化的时候执行哪个方法**

  Spring容器销毁做一些关闭，资源释放等工作。

  **destroy-method=””在Spring销毁的时候执行哪个方法**



### 七、依赖注入DI

1. IOC（DI） -- 控制反转（依赖注入）

   - 在创建对象的过程中，Spring可以设置对象的属性，这个过程称之为依赖注入，也叫DI。

   - 原来的做法：

     ```java
     Person p=new Person();
     p.setName(“zs”);
     p.setAge(30);
     Person p1=new Person(“zs”,30);
     ```

     现在Spring可以通过IOC管理Person对象，可以通过DI设置Person类中的属性

2. 通过set方法完成依赖注入

   - 情况：如果Hero类中包含了其它的javabean类

3. 自动装配

   ```xml
   <property name="dog" ref="dog"></property>
   <property name="cat" ref="cat"></property>
   ```

   - 自动装配使用的情况是在引入bean特别多的情况下。

   - autowire=”byName”

     Spring会自动根据javabean类的属性寻找<bean>标签对应的id来进行属性依赖注入。

     <font style="color:red">  要求要注入的javabean类中的属性和<bean>标签id值要一致。</font>

   - autowire=”byType”

     Spring会自动根据javabean类的属性的类型去配置文件中寻找`<bean>`标签配置class的值。

     <font style="color:red">要求：要依赖注入的javabean类的属性的类型和`<bean>`标签class的内容一致，但是在配置文件中`<bean>`标签配置的javabean类只能有一个如果有多个，pring是不知道byType来注入哪个。</font>

4. 通过构造方法完成依赖注入

   - Javabean类中的属性一种方式使用set方法完成的依赖注入，另外一种方式也可以在类被创建的过程中通过构造方法传入并设置属性的值。

     Hero hero=new Hero(“亚瑟”,xxxx,xxx);

   - 练习

     1. 定义Cat类，属性name和age 完成属性的注入
     2. 在Hero类中追加Cat cat属性，完成属性的注入



### 总结

**Spring --> IOC  DI**

-  Spring容器的初始化和销毁
-  IOC 
   	1. 获取对象的3种方式
      	2. 创建对象的4种方式
      	3. 单例和多例模式
      	4. 懒加载
-  DI 
   	1. set依赖注入、自动装配
      	2. 构造方法依赖注入



## 第二部分:注解、反射注解、用注解实现IOC，用注解实现DI，其它注解

### 一、注解

- 注释：给人看的提示信息

- 注解：给程序看的提示信息

  通常用来在某种程度上替代配置文件，实现轻量级配置

- 注解是从JDK5.0开始提供的特性



### 二、Java中常见的几个注解

1. `@Override`子类继承父类以后，**重写**父类方法的注解

2. `@Deprecated` – 过时注解

3. `@SuppressWarning` --消除黄色警告的注解

4. 自定义注解

   - 自定义一个注解的过程非常类似于定义一个接口。

   - 可以使用**@interface**来定义一个注解

   - 可以使用**元注解**来修饰注解，控制自定义注解的特征

     - （元注解：sun公司提供专门用来修饰注解定义的）

     1. @Target – 声明当前定义的注解可以用在什么位置

        - 可以在该元注解中声明ElementType类型的参数来指定注解可以使用在什么位置
        - ElementType.CONSTRUCTOR构造方法
        - ElementType.FIELD 成员变量
        - ElementType.LOCAL_VARIABLE 局部变量
        - ElementType.METHOD 方法
        - ElementType.PARAMETER 方法参数
        - ElementType.TYPE 类

     2. @Retention – 声明当前定义的注解被保留到什么阶段

        - 可以在该元注解中声明RetentionRolicy类型的参数来指定什么阶段
          - HelloWorld.java --> javac编译
          - HelloWorld.class--> 
          - 加载运行阶段—> java运行
        - RetentionRolicy.SOURCE保留在源码阶段，在编译过程中丢失，主要是给编译器在编译代码的时候看到，@Override就是该级别。
        - RetentionRolicy.class保留在.java和.class两个阶段
        - RetentionRolicy.RUNTIME 保留全阶段

     3. @Documented指定当前注解是否会被文档提取工具提取到自动生成的文档中

        - --在注解中添加属性以及给属性赋值

        1. 在注解中声明属性的过程非常类似于在接口中定义方法
        2. 在注解声明中定义的属性需要在使用注解时为属性赋值
           1. 可以在注解的后面跟小括号，在小括号内通过属性名=属性值进行赋值，多个值之间用逗号分开。
           2. 可以在属性的后面跟default关键字，指定属性默认值，则在使用注解时不给属性赋值，该属性取默认值
           3. 如果注解中只有一个属性需要被赋值，且该属性的名称叫value，则在赋值时value可以省略
           4. 如果注解的某个属性是一维数组，但赋值时候只有一个值，则大括号是可以省略的。
        3. 声明的属性必须是public，public可以省略
        4. 声明的属性必须是八种基本数据类型、String类型，Class类型、枚举类型、其它注解类型或者以上类型的一维数组



### 三、反射注解+注解实现IOC

1. Spring除了默认的使用xml配置文件的方式实现IOC的相关配置，还可以使用注解的方式实现IOC，这种方式效率更高，配置信息更清晰，修改也方便，推荐使用。
   1.  提前准备相关的环境
       - 导入spring-aop的jar包
       - --引入context约束
   2.  回顾：
       - 使用配置文件的方式使用Spring中的IOC
   3.  使用注解完成IOC
       1. @Component使用id的推算规则
          - 如果明确指定过id，则使用指定id  如果没有明确指定过id，自动推算id
          - 自动推算id时，看类名的第二个字母
            -  --如果类名的第二个字母是小写的，则首字母转小写为id
            -  --如果类名的第二个字母是大写的，则首字码保持不变的id
       2. @Component不使用id的推算规则
   4.  使用注解实现工厂模式（实例工厂）
       - @Bean(name=””)

### 四、注解实现DI

```xml
 <!-- 开启注解方式DI --> 
<context:annotation-config></context:annotation-config>
```

1. `@Value(“内容”)`直接给属性用注解DI依赖注入

2. 如果不想使用@Value(“内容”)将内容写死，可以选择写在配置文件中。

   ```xml
   <context:property-placeholder location="classpath:/db.properties"/>
   
   @Value(“${name}”)
   ```

3. 使用注解实现DI—集合

   -  --util约束引入
   -  -- `<util:list id="lt1">…..`
   -  --`@Value(“#{@id值}”)`

4. JavaBean类中包含其它JavaBean作为属性的形式

   - @Autowired

   - @Autowired自动装配的实现原理  实现自动装配的注解，可以完成javabean类型的属性注入

     - --先按照类型进行匹配，如果找到唯一的就注入；

     - --如果按照类型找不到或者找到了多个，则开始使用id进行匹配，如果找到唯一的id就注入，如果找不到抛出异常

     - 测试1：Dog，HSQDog和JMDog都正常被@Component注解

       >  运行正常
       >
       >  --先根据类型匹配，找到了3个HSQDog、Dog和JMDog
       >
       >  --再根据id进行匹配，只找到了Dog
       >
       >  输出结果：
       >
       >  dog=com.lddx.domain.Dog@1ed5459]

     - 测试2：去掉Dog类的@Component注解

       >  运行报错
       >
       >  --先根据类型匹配，找到了2个HSQDog和JMDog
       >
       >  --再根据id匹配，没找到，报异常。

     - 测试3：去掉Dog和HSQDog类上的@Component注解

       >  运行正常，运行结果是
       >
       >  dog=com.lddx.domain.JMDog@313170
       >
       >  --先根据类型查找，直接找到一个唯一的JMDog，结束。

     - 测试4:给HSQDog和JMDog都加上@Component注解，运行报错误，因为根据类型和id都找到了2个。

       >  给HSQDog添加一个指定的id值为dog。
       >
       >  运行正常，运行结果为：dog=com.lddx.domain.HSQDog@afae4a
       >
       >  --先根据类型进行匹配，找到了2个HSQDog和JMDog；
       >
       >  --再根据id进行匹配，找到了HSQDog，因为HSQDog指定了id是dog。

5. @Qualifier注解

   - 一般是配合@Autowired一起使用的注解
   - 如果同时配置了@Autowired和@Qualifier这两个注解，自动装配不再按照类型进行匹配了，直接按照id进行匹配，如果找到唯一的就注入，否则就报异常。

### 五、其他的注解

1. @Scope(value=”prototype”)多例模式

   @Scope(value=”singleton”)默认单例模式

2. @Lazy

   - 设置此注解的类会懒加载
   - 不写不设置此注解类默认不会懒加载  （针对的单例模式）

3. @PostConstruct

   - 修饰bean类中的某个方法为Spring容器初始化调用的方法
   - 等价于init-method=””

   @PreDestory

   -   修饰bean类中的某个方法为Spring容器销毁时调用的方法
   -   等价于destory-method=””

4. @Controller   @Service

     @Repository   @Component

   - 这4个注解的功能是完全相同的,都是用来修饰类的，将类声明为Spring管理的bean

   - 区别：

     - @Controller用在控制层的注解，属于web层
     - @Service用在业务访问层的注解，属于service层
     - @Repository用在数据访问层的注解，属于dao层
     - @Component一般通用的注解，以上3个层以外的地方使用

     ![注解](https://cdn.jsdelivr.net/gh/xx025/cloudimg@main/img/20210521210841.png)

### 六、案例—项目分层，实现彻底的解耦



---



## 第三部分: AOP

- 问题：重构项目的时候在service层添加了功能性代码和业务代码
  1. 功能代码和业务代码混杂在一起
  2. 功能代码重复在使用
- 开发项目保证六字真言：
  - 高内聚：每一层只干自己该干的事情，绝对不越界
  - 低耦合：层与层之间降低关联度    SpringIOC+DI+Java定义接口

### 一、AOP的概念引入

- 概念：面向切面编程—AOP

![注解](https://cdn.jsdelivr.net/gh/xx025/cloudimg@main/img/20210521211202.png)

### 二、代理模式的设计模式—代理模式

- 概念：在不改变一个类的情况下增强类中的方法
- 案例1：在不改变UserServiceImpl类中addUser方法，还要给addUser增强该方法的功能
  1.  静态代理
  2.  Java动态代理Proxy
  3.  cglib动态代理
- 案例2：FBB添加代理（助理）
  1. 静态代理
  2. Java动态代理
  3. cglib动态代理



### 三、SpringAOP的入门

1. Spring AOP中的基本概念

   - **名词**：连接点 切入点 切面 通知方法   目标对象 目标方法

     1. 连接点：层与层之间方法的调用过程
     2. 切入点：连接点+切入表达式=切入点根据切入点决定对哪个连接点进行功能的增强
     3. 切面：也叫切面类，用来写增强代码的功能
     4. 通知方法：简称通知，用来完成增强功能的方法，通知方法是写在切面类中
     5. 目标对象：处理完之后回到的目标对象
     6. 目标方法：处理完之后回到的目标方法
   - **动词**：织入 
     - 将切面类中通知方法的结果返回到目标对象和目标方法的过程称之为织入。
2. Spring的aop入门案例
   1. 备开发jar包，SpringIOC(DI)+AOP共12个核心jar包。
   2. 配置约束—aop约束
   3. 创建切面类
   4. 定义通知方法
   5. 在applicationContext.xml配置文件配置切面，配置通知

### 四、切入点表达式

1. within()表达式

   - 通过类名进行匹配，属于粗粒度的切入点表达式，只能控制到类这个级别。
   - 语法：within(包名.类名)，会将这个类中所有的连接点都会被表达式识别，成为切入点。
   - （切入点=连接点+切入点表达式）

   1. within表达式可以使用*号匹配符，匹配指定包下所有的类。
      - 注意：只匹配当前包，不包括当前包的子孙包
   2. within表达式也可以使用*号匹配包
      - within(com.lddx.service.*.*)
      - 第一个`*`代表一层子目录
      - 第二个`*`代表子目录下所有的内容
   3. within表达式使用`..*`，匹配指定包下及其子孙包下所有的类

2. execution()表达式

   - 细粒度的切入点表达式，可以以方法
   - 为单位定义切入点规则。
   - 语法：
     - execution(返回值类型 包名.类名.方法名(参数类型,参数类型…))

   - 例子1：

     ```java
     execution(void com.lddx.service.UserServiceImpl.addUser(java.lang.String));
     ```

     - 该切入点的切入规则是：找指定包下指定的类指定的方法addUser，指定参数指定返回值

   - 例子2

     `execution(* com.lddx.service.*.query())`

     - 规则是：指定包下所有类中的query方法，要求方法没有参数，返回值类型不限

   -  例子3：

      `execution(* com.lddx.service..*.query())`

     - 规则：指定包下及其子孙包下所有的类的query方法，要求没有参数，返回值类型不限

   -  例子4：

     ` execution(* com.lddx.service..*.query(java.lang.String))`

     - 规则：找指定包及其子孙包下所有的类的query方法，要求1个字符串类型的参数，返回值类型不

       限`

   - 例子5：

     `execution(* com.lddx.service..*.query(..))`

     - 规则：找指定包及其子孙包下所有类的query方法，参数数量及类型不限，返回值不限

   - 例子6：

     `execution(* com.lddx.service..*.*(..));`

     - 规则：找指定包及其子孙包下所有类的任意方法，参数不限，返回值不限

   - 例子7：

     `execution(* com.lddx.service..*(..))`

     - 规则：找指定包及其子孙包下所有类的任意方法，参数不限，返回值不限。

### 五、五大通知

1. 前置通知：在目标方法之前执行的通知

   1. 基本原理即使用

      ![五大通知2021-05-21-21-28-08](https://cdn.jsdelivr.net/gh/xx025/cloudimg@main/img/20210521212849.png)

      - 配置方法

        <font style="color:red">` <aop:before method=”” />`</font>

   2. JoinPoint

      - 可以在前置通知方法的参数中选择性的接受一个JoinPoint类型的参数。
      - 可以接受也可以不接受，一旦接受必须保证该参数处在方法参数列表的第一位，否则就会报异常。
      - JoinPoint代表当前连接点，通过此对象可以获得目标对象和目标方法

2. 环绕通知

   - 在目标方法执行之前和之后都可以执行的通知
   - <font style="color:red"> ` 配置方法：<aop:around method=”” />`</font>
   -  总结：环绕通知可以实现：
     1.  控制目标方法是否执行
     2. 在目标方法之前或者之后执行增强功能的代码
     3.  控制调用者是否可以获取返回值
     4. 改变返回值
        - 尽量不再切面的环绕通知中改变返回值，如果改变违反了高内聚的原则

3. 后置通知

   - 在目标方法成功执行之后执行的通知

   - 配置方式：

     <font color="red"> <aop:after-returning method=”” /></font>

     -  --`returning=””`属性用来在后置通知中接收目标方法的返回值的

4. 异常通知

   - 在目标方法抛出异常时执行的通知方法

   - 配置方法：

     - throwing=””在通知方法中获得目标方法抛出的异常

     - method=””执行哪个通知方法

     - `  <aop:after-throwing method=”” throwing=””>`

5. 最终通知

   - 是在目标方法执行之后执行的通知后置通知也是在目标方法执行之后执行的通知。
   - 最终通知和后置通知不同之处在于，后置通知是在目标方法<font color="red">正常</font>执行后执行的，如果目标方法<font color="red">没有正常</font>执行，比如抛出异常了，则后置通知不会执行，而最终通知无论如何都会在目标方法执行后执行。
   - 配置方法
     - `<aop:after method=””>`
   - 说明：后置通知可以通过配置returning=””得到返回值，而最终通知无法得到。

### 六、五大通知的执行顺序

- 当一个切面中配置了多个通知，执行顺序是：
  - 前置、环绕前一定在目标方法执行之前执行；
  - 后置、环绕后、最终一定在目标方法执行之后执行；
  - 在依赖以上原则的基础上，这些通知的
- 执行顺序是取决于配置的顺序,配置越往前，越优先执行。

### 七、多个切面的执行顺序

![多个切面2021-05-21-21-42-10](https://cdn.jsdelivr.net/gh/xx025/cloudimg@main/img/20210521214234.png)

### 八、 注解方法实现AOP

1. SpringAOP的原理

   - Spring在创建bean时候，除了创建目标对象bean之外，还会根据aop的配置，生成目标对象的代理（助理）。

   -  SpringAOP使用的代理是JavaProxy的动态代理和cglib的动态代理。默认情况下，如果目标对象实现过接口，则采用的使JavaProxy代理，如果目标对象没有实现过接口，则采用cglib动态代理。

   - 开发者可以在Spring中进行配置，要求无论目标对象是否实现过接口，都强制使用cglib动态代理。

     <font color="red"> <aop:config proxy-target-class=”true” > </font>

2. AOP的注解方式的实现

   Spring也支持注解的方式实现aop,相对于配置文件的方式，注解更轻量级，配置和修改更简单，目前最受欢迎。



## Spring 框架

1.  IOC 低耦和
   - --配置文件的方式实现IOC
     - `<bean id="" class=""/>`
   -  --注解方式实现IOC
     - ` @Component…` 
2. DI  依赖注入
   - --配置文件的方式实现DI
     - ` <proprety />`
   - --注解的方式实现DI
     - ` @Value @AutoWired…`
3.  AOP 高内聚
   - --配置文件的方式实现AOP
     - ` <aop:aspect> <aop:befor>…`
   - --注解的方式实现AOP

**SpringMVC框架 -servlet技术 MyBatis框架**



## 四、   SpringMVC框架

1. SpringMVC概述

   - SpringMVC是一个web层(控制层)的框架，主要负责与浏览端交互，业务逻辑的调用(调用service层)。
   - Spring是service层的框架。
   - SpringMVC的特点简单易用性能佳

2. 为什么有了Servlet还要使用SpringMVC

   1. Servlet的开发配置相对麻烦，Servlet特别多的时候web.xml文件将非常臃肿。
   2. 每一个Servlet只能处理一个功能，如果需要多个功能就需要开发多个Servlet，项目中存在大量的Servlet显得臃肿。
   3. 获取请求参数，进行类型转换，封装数据到bean的过程比较繁琐
   4. 其他一些开发不便捷的地方。
      - 例如：乱码问题，表单验证问题…

3. SpringMVC的组件

   1. 前端控制器 DispatcherServlet
   2.  处理器 Handler
   3. 处理器映射器 HandlerMapping
   4. 处理器适配器 HandlerAdapter
   5. 视图解析器 ViewResolver
   6. 视图View

4. SpringMVC的入门案例 – 注解

   1. 新建项目 -- web项目

   2. 导入开发jar包（31个）

   3. 在web.xml文件中配置前端控制器   DispatcherServlet。

   4. 创建SpringMVC的核心配置文件  SpringMVC默认会自动在web应用的WEB-INF目录下去寻找(前端控制器中servlet-name)-servlet.xml文件作为当前SpringMVC的核心配置文件。

   5. 在springmvc.xml核心配置文件中加入Spring的一些约束（beans context mvc）

   6. 配置springmvc.xml核心文件的内容

   7. 在com.lddx.web包下开发Handler处理器

   8. 启动tomcat服务器，将web项目部署到tomcat服务器中，在浏览器输入地址访问：

      `http://localhost:8080/ SpringMVCN04_01_First/`

   9. 完成Hander处理的结果

      - ModelAndView类型的结果

   10. 在springmvc.xml文件中配置视图解析器

   11. 按照指定的路径创建jsp页面，获取MAV中的值

5. SpringMVC细节

   

#### 一、 @RequestMapping注解

1. 基本使用
   - @RequestMapping通过注解方式实现路径到处理器方法的映射。
   - 可以使用在类或者方法上；
   - 用在方法上表示该方法变为一个处理器，且和指定的路径做映射。
   - 用在类上则配置的路径会作为这个类中所有处理器的路径的父路径使用。
2. 在@RequestMapping注解中使用属性
   1. value属性
      - 指定当前处理器绑定到哪个访问路径上；
      - 可以配置多个路径；
      - 路径中也可以使用*作为通配符来配置路径。
   2. method属性
      - 指定当前处理器方法处理的哪
      - 种提交方式提交的请求
      - Get请求和Post请求
      - 不指定则接受任意请求方式的请求
   3. params属性
      - 限定对请求参数的要求
      - 格式1：只指定名称，要求**必须**具有该名称的请求参数
      - 格式2:以”!名称”的格式，**必须**不包含指定名称的请求参数
      - 格式3：以”名称=值”或者”名称!=值”的格式，**必须**具有某个请求参数，且值必须等于或者不等于给定的值

#### 二、 处理器方法的参数

1. web开发相关的对象

   - 在处理器方法中可以直接接收和
   - web开发相关的对象，完成web开发相关的功能。
      - HttpServletRequest
      - HttpServletResponse
      - HttpSession
      - WebRequest
   - 该对象相当于是request对象和session对象的合体，同时具备了request具有的方法和session具有的方法。 

2. web开发相关的流对象

   - 方法的参数中定义如下：
      - InputStream  
         - 等价写法request.getInputStream()
      -  OutputStream
         - 等价写response.getOutputStream
      -  Reader
         - 等价写法request.getReader()
      - Writer
         - 等价写法response.getWriter();

3. Web开发相关的模型对象

   - Model
   - Map
   - ModelMap

4. Web开发相关的请求参数

   - 请求参数中中文乱码的解决

   - 方案1：手动解决乱码

      ```java
      byte[] bs=str.getBytes(“iso-8859-1”);
      String s=new String(bs,”utf-8”);
      ```

      -  对Get和Post都有效
      - 每个参数都要处理，麻烦

   - 方案2：修改tomcat的配置，只针对get请求有效。

      URIEncoding=”utf-8”

   - 方案3：使用

      ```java
      request.setCharacterEncoding(“utf-8”);
      ```

      - 方法设置中文编码
      - 只针对Post请求有效

   - 方案4：使用Spring提供的过滤器编码

5. 域对象

   1. @RequestAttribute
      - 用在处理器方法参数上
      - 用来从request域中获取指定名称的属性的属性值
   2. @SessionAttribute
      - 用在处理器方法参数上
      - 用来从session域中获取指定名称的属性的属性值

6. cookie值

   -  @CookieValue
   - 用在处理器方法参数上
   -  用来从Cookie中获取指定名称的Cookie值 

#### 三、处理器方法的返回值

1. 返回ModelAndView类型
   - 返回一个ModelAndView对象，在其中封装Model和View信息。
   
2. 返回字符串类型
   1. 普通字符串类型
      - 返回的字符串将作为视图名称使用
   2. 字符串包含forward
      - 转发的功能，字符串的内容就是转发的地址
   3. 字符串包含redirect
      -  重定向的功能

3. void返回值

   - 如果返回值类型是void，则SpringMVC会采用默认视图名作为当前请求的视图名称来使用。

   - 默认视图名：就是当前访问处理器方法访问路径去除后缀的结果。

4. 其他类型

   - 除了以上返回类型我们都归为其他类型。

   - 处理器方法会采用默认视图名，即等同于处理器方法返回的void类型时的视图名；

   - 返回的是其他类型，SpringMVC会将返回的任何内容都会被存入模型中供后续使用，值为返回的数据，键为返回类型名首字母小写。

   ```java
   Person person=new Person();
   model.addAttribute(“person”,person);
   
   /my01/test06.action-->/my01-->test06.jsp
   ```

Struts2 Spring Hibernate

SpringMVC Spring MyBatis

#### 四、MyBatis框架

1. MyBatis概述

   - MyBatis是最近几年非常流行的数据访问层(dao层)的框架，能够简单高效的实现对数据层的访问。

2. 和JDBC的比较

   1. JDBC：

      - 是原生的关系型数据库访问方法

      1. 每次操作数据库都需要获取连接，关闭连接，在大量的访问数据库时候，频繁的开关消耗性能
      2.    需要手动的编写sql，有学习成本。
      3. 需要手动赋值sql参数，查询的结果需要手动的封装到bean中。
      4. sql语句写死在程序中，需要修改sql必须修改源文件。

   2.  MyBatis

      - 是一种半自动对象-表映射关系的Dao层框架，可以自动的进行对象的封装，但是sql仍需要自己来写。
      - MyBatis可以保持手写sql语句的灵活性，自动封装数据，较少复杂的代码。

3. MyBatis的结构

   ![mybatis2021-05-21-22-53-24](https://cdn.jsdelivr.net/gh/xx025/cloudimg@main/img/20210521225430.png)

4. MyBatis的入门案例

   1. 新建Java项目，导入MyBatis开发相关的jar包（9个）
   2. 创建表，创建对应的JavaBean
   3. 编写配置文件SqlMapConfig.xml
   4. 编写映射文件，编写sql及映射关系UserMapping.xml
   5. 创建测试类，测试查询代码

5. MyBatis参数传递

   1. 值传递 – Map传递
      - 在映射文件中通过#{}进行应用
   2. 值传递 –javabean传递
   3. 值传递 –单值传递

6. MyBatis增删改查（动态sql语法）

   1. 修改操作 update
   2. 查询操作 select
   3. 插入操作 insert
   4. 删除操作 delete 