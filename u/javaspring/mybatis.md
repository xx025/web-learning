# mybatis

---

## 传参

```java
//filename=test
//测试类
public class Test01 {
	private SqlSession session;
	
	@Before
	public void before() throws IOException {
		// 1、创建SqlSessionFactory
		// 使用输入流来读取SqlMapConfig.xml文件
		InputStream is = Resources.getResourceAsStream("SqlMapConfig.xml");
		SqlSessionFactoryBuilder ssfb = new SqlSessionFactoryBuilder();
		// is输入流传入builder()方法中，SqlSessionFactory
		// 会通过输入流读取到文件的配置内容
		SqlSessionFactory factory = ssfb.build(is);
		// 2、创建SqlSession对象
		session = factory.openSession();
	}

	@After
	public void after() {
		// 4、关闭session
		session.close();
	}

	/*
	 * 测试根据id查询的操作
	 */
	@Test
	public void test03(){
		//使用已经讲过的Map和javabean方法
		//User u1=new User();
		//u1.setId(3);
		//Map<String,Object> map=new HashMap<String,Object>();
		//map.put("id", 3);
		//单值传递
		User user=session.selectOne
		("com.lddx.mapper.UserMapping.select02",3);
		System.out.println(user);
	}
	
	
	/*
	 * 测试插入
	 */
	@Test
	public void test02() throws IOException {
		//3、使用session进行CRUD操作
		//创建javabean--User类
//		User user=new User();
//		user.setId(1001);
//		user.setName("zs");
//		user.setAge(50);
		//使用Map值传递
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("id", 1002);
		map.put("name","ls");
		map.put("age",30);
		session.insert
		("com.lddx.mapper.UserMapping.insert01",map);
		//在执行插入，修改和删除操作的时候,需要commit提交
		session.commit();
	}

	/*
	 * 测试查询
	 */
	@Test
	public void test01() throws IOException {
		// 3、使用session进行CRUD操作
		// 使用Map进行值传递，给#{min}和#{max}赋值
		Map<String, Object> map = new HashMap<String, Object>();
		// 强调："min"要和#{}中的min名称保证一致
		map.put("min", 10);
		map.put("max", 25);
		List<User> list = session.selectList(
				"com.lddx.mapper.UserMapping.select01", map);
		System.out.println(list);
	}
}

```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!-- 命名空间，保证唯一，标识UserMapping.xml文件的 -->
<mapper namespace="com.lddx.mapper.UserMapping">
	<!-- 查询语句，查询年龄在10到25之间的 -->
	<select id="select01" resultType="com.lddx.domain.User">
		select * from user where age 
		between #{min} and #{max};
	</select>
	<!-- 插入语句 -->
	<!-- 如果打算用javabean值传递，#{}中的名称要和
	     javabean中定义的私有属性保证一致;
	     javabean类中一定要有get方法
	 -->
	<insert id="insert01">
		insert into user 
		values(#{id},#{name},#{age});
	</insert>
	<!-- 根据id查询语句 -->
	<select id="select02" resultType="com.lddx.domain.User">  
		select * from user where id=#{id};
	</select>

</mapper>

```

## CRUD

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!-- 命名空间，保证唯一，标识UserMapping.xml文件的 -->
<mapper namespace="com.lddx.mapper.UserMapping">
	<!-- 修改操作 -->
	<update id="update01">
		update user set age=#{age} where id=#{id};
	</update>
	<!-- 修改操作 动态sql语句的写法 -->
	<update id="update02">
		update user
		<set>
			<if test="name!=null">name=#{name},</if>
			<if test="age!=0">age=#{age}</if>
		</set>
		where id=#{id};
	</update>


	<!-- 查询操作 -->
	<select id="select01" resultType="com.lddx.domain.User">
		select * from user where id=#{id}
	</select>
	<!-- 查询操作  根据id或者name或者age或者同时 -->
	<select id="select02" resultType="com.lddx.domain.User">
		select * from user
		<where>
			<if test="id!=0">id=#{id}</if>
			<if test="name!=null"> and name=#{name}</if>
			<if test="age!=0"> and age=#{age}</if>
		</where>
		;
	</select>

	<!-- 插入操作  动态sql语句
	     insert into user(id) value(33);
	     insert into user(id,name) value(33,'qq');
		 insert into user(id,name,age,) 
		 values(null,'ww',30,);
	 -->
	<insert id="insert01">
		insert into user
		<trim prefix="(" suffix=")" suffixOverrides=",">
			id,
			<if test="name!=null">name,</if>
			<if test="age!=0">age,</if>
		</trim>
		values
		<trim prefix="(" suffix=")" suffixOverrides=",">
			null,
			<if test="name!=null">#{name},</if>
			<if test="age!=0">#{age},</if>
		</trim>
		;
	</insert>

	<!-- 删除操作 
		 delete from user where id=1;
		 delete from user 
		 where id=1 and name='zs' and age=30;
	-->
	<delete id="delete01">
		delete from user
		<where>
			<if test="id!=0">id=#{id}</if>
			<if test="name!=null"> and name=#{name}</if>
			<if test="age!=0"> and age=#{age}</if>
		</where>
		;
	</delete>

</mapper>

```