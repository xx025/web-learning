1. @Component  IOC

     ioc，管理javabean对象，功能类似于

   `  <bean id="" class="" />`

2. @Bean(name=”xx”)  DI

    实例工厂中实例方法配置，实例方法有返回值，可以根据xx获取方法返回的对象  功能类似于

   `<bean id="xx"  factory-bean="”  factory-method=" "></bean>`

3. @Value(“内容”)  DI

    注解方式实现依赖注入，将内容给属性赋值

    等价于配置文件方式的set注入和构造方法注入

     @Value(“${name}”) 从properties文件中读取内容实现依赖注入

     @Value(“#{@id}”)  从配置文件中读取集合数据实现依赖注入

4. @Autowired

   自动装配其它javabean类

5. @Qualifier

     配合@Autowired一起使用的注解，功能是只根据id进行匹配

     语法：@Qualifier

   ​     		@Qualifier(“id值”)

6. @Scope(value="prototype")

    设置bean为单例singleton或者多例prototype模式

7. @Lazy 设置懒加载的注解

8. @PostConstruct

   @PreDestory

     Spring容器初始化和销毁时执行方法时配置的注解 

9. @Controller

   @Service

   @Repository

   @Component

    在javaee经典三层中使用的注解，功能和@Component相同

10. @Aspect\

    配置aop中的切面类

11. 配置通知

    @Before  前置通知

    @Around  环绕通知

    @AfterReturning  后置通知

    @AfterThrowing  异常通知

    @After   最终通知

12. @Pointcut 

    配置切入点表达式的注解

13. @RequestMapping

    @RequestParam

    @RequestAttribute

    @SessionAttribute

    @CookieValue



---

1. 开启全包扫描配置

   `<context:component-scan base-package=" ">`

   `</context:component-scan>`

2. 开启注解方式DI

   `<context:annotation-config></context:annotation-config`>

3. 读取properties文件

   `<context:property-placeholder location="classpath:/db.properties"/>`

4. 配置集合数据，为了实现注解方式依赖注入集合数据

   `<util:集合/pro  id="xx">`

   