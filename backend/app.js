var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

app.post("/api/list",function(req,res){
	res.json({
		code:0,
		list:[
				{
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3954743,
			        "positionName":"媒体创意创作专家",
			        "city":"北京",
			        "createTime":"今天 17:16",
			        "salary":"15k-30k",
			        "companyId":7835,
			        "companyLogo":"i/image/M00/46/E3/Cgp3O1eN2JaAESTsAABXU_egeWg508.png",
			        "companyName":"金山办公软件",
			        "companyFullName":"北京金山软件有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3943445,
			        "positionName":"高级数据分析师/数据增长专家",
			        "city":"北京",
			        "createTime":"今天 17:16",
			        "salary":"15k-30k",
			        "companyId":7835,
			        "companyLogo":"i/image/M00/46/E3/Cgp3O1eN2JaAESTsAABXU_egeWg508.png",
			        "companyName":"金山办公软件",
			        "companyFullName":"北京金山软件有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3939563,
			        "positionName":"网络推广专员",
			        "city":"广州",
			        "createTime":"今天 17:15",
			        "salary":"4k-8k",
			        "companyId":299705,
			        "companyLogo":"i/image2/M00/33/05/CgoB5lpBrQWAItH2AAD9d9CLeGc156.png",
			        "companyName":"芬尼",
			        "companyFullName":"广东芬尼科技股份有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3939632,
			        "positionName":"天猫店长",
			        "city":"广州",
			        "createTime":"今天 17:15",
			        "salary":"8k-12k",
			        "companyId":299705,
			        "companyLogo":"i/image2/M00/33/05/CgoB5lpBrQWAItH2AAD9d9CLeGc156.png",
			        "companyName":"芬尼",
			        "companyFullName":"广东芬尼科技股份有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3960395,
			        "positionName":"高级客户主任",
			        "city":"广州",
			        "createTime":"今天 17:12",
			        "salary":"5k-7k",
			        "companyId":30893,
			        "companyLogo":"image1/M00/00/46/Cgo8PFTUXN2Ae4n0AAAf6u4DCPA223.png",
			        "companyName":"广州博拉",
			        "companyFullName":"广州博拉广告有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3954518,
			        "positionName":"php leader",
			        "city":"北京",
			        "createTime":"今天 17:12",
			        "salary":"20k-40k",
			        "companyId":61249,
			        "companyLogo":"i/image/M00/77/85/CgqKkVg4ZMeAR3-3AACOhZ_Lekw55.jpeg",
			        "companyName":"云鸟科技",
			        "companyFullName":"北京云鸟科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3954530,
			        "positionName":"数据产品经理",
			        "city":"北京",
			        "createTime":"今天 17:12",
			        "salary":"15k-30k",
			        "companyId":61249,
			        "companyLogo":"i/image/M00/77/85/CgqKkVg4ZMeAR3-3AACOhZ_Lekw55.jpeg",
			        "companyName":"云鸟科技",
			        "companyFullName":"北京云鸟科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3961467,
			        "positionName":"技术部经理",
			        "city":"广州",
			        "createTime":"今天 17:08",
			        "salary":"10k-20k",
			        "companyId":129735,
			        "companyLogo":"i/image/M00/2C/69/Cgp3O1c5YgqABpdEAAHHKLfk_uI046.jpg",
			        "companyName":"广州德慷",
			        "companyFullName":"广州市德慷电子有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3958017,
			        "positionName":"销售支撑",
			        "city":"广州",
			        "createTime":"今天 17:07",
			        "salary":"6k-10k",
			        "companyId":61875,
			        "companyLogo":"image1/M00/3D/62/Cgo8PFW4T6OAM7tIAAAK0iaN1SE026.jpg",
			        "companyName":"设计院",
			        "companyFullName":"广东省电信规划设计院有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3955026,
			        "positionName":"运营分析专家",
			        "city":"合肥",
			        "createTime":"今天 17:06",
			        "salary":"15k-25k",
			        "companyId":2474,
			        "companyLogo":"i/image/M00/00/20/Cgp3O1YtmkSAZjX1AAA78knErXc273.jpg",
			        "companyName":"滴滴出行",
			        "companyFullName":"北京嘀嘀无限科技发展有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3959487,
			        "positionName":"前端主程/U3D主程序",
			        "city":"深圳",
			        "createTime":"今天 17:04",
			        "salary":"25k-45k",
			        "companyId":23291,
			        "companyLogo":"image1/M00/00/2D/Cgo8PFTUXHmAQ6K2AAA-xp7F-7c908.jpg",
			        "companyName":"美图公司",
			        "companyFullName":"厦门美图之家科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3960917,
			        "positionName":"DevOps运维开发工程师",
			        "city":"北京",
			        "createTime":"今天 17:03",
			        "salary":"15k-30k",
			        "companyId":149913,
			        "companyLogo":"i/image/M00/5E/8F/CgqKkVfroDGAH2GlAAAF08VdUmo795.png",
			        "companyName":"厚本金融",
			        "companyFullName":"北京厚本科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3958390,
			        "positionName":"Scrum Master 项目经理",
			        "city":"宁波",
			        "createTime":"今天 17:02",
			        "salary":"10k-15k",
			        "companyId":153746,
			        "companyLogo":"i/image/M00/67/AC/CgqKkVgOzwaAR3ByAAAaFIPRpk4053.png",
			        "companyName":"宁波思艾特软件有限公司",
			        "companyFullName":"宁波思艾特软件有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3954080,
			        "positionName":"原画师",
			        "city":"深圳",
			        "createTime":"今天 16:58",
			        "salary":"5k-7k",
			        "companyId":153039,
			        "companyLogo":"i/image/M00/66/4C/CgqKkVgJzdeAUZW_AAATnExqynw565.jpg",
			        "companyName":"鲸旗游戏",
			        "companyFullName":"深圳市鲸旗天下网络科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3939581,
			        "positionName":"直播艺人",
			        "city":"广州",
			        "createTime":"今天 16:52",
			        "salary":"5K-10K",
			        "companyId":180893,
			        "companyLogo":"i/image/M00/BC/72/Cgp3O1jIoRGAZAsWAACWY2_OUZw254.jpg",
			        "companyName":"雪影",
			        "companyFullName":"广州雪影文化传媒有限公司"
			    },
				{
	                "logger": {
	                    "traceCapable": true,
	                    "name": "com.lagou.entity.mobile.MobilePosition"
	                },
	                "positionId": 3760240,
	                "positionName": "销售运营管理岗",
	                "city": "北京",
	                "createTime": "今天 10:59",
	                "salary": "13k-15k",
	                "companyId": 65100,
	                "companyLogo": "image1/M00/34/EC/CgYXBlWaH46AETsNAAAGp-dsUFQ322.png",
	                "companyName": "北京新中新",
	                "companyFullName": "北京新中新华捷系统集成有限公司"
	            },
	            {
	                "logger": {
	                    "traceCapable": true,
	                    "name": "com.lagou.entity.mobile.MobilePosition"
	                },
	                "positionId": 3765293,
	                "positionName": "Android开发工程师",
	                "city": "上海",
	                "createTime": "今天 10:58",
	                "salary": "10k-15k",
	                "companyId": 24995,
	                "companyLogo": "image1/M00/00/33/CgYXBlTUXI-AC08_AACIkHlny3Y866.jpg",
	                "companyName": "泛微",
	                "companyFullName": "上海泛微网络科技股份有限公司"
	            },
	            {
	                "logger": {
	                    "traceCapable": true,
	                    "name": "com.lagou.entity.mobile.MobilePosition"
	                },
	                "positionId": 3765276,
	                "positionName": "运维工程师",
	                "city": "北京",
	                "createTime": "今天 10:58",
	                "salary": "11k-15k",
	                "companyId": 6692,
	                "companyLogo": "i/image/M00/60/BB/Cgp3O1f6CDyAE8_OAAB8NF5CFa4180.png",
	                "companyName": "海云数据",
	                "companyFullName": "天津大海云科技有限公司"
	            },
	            {
	                "logger": {
	                    "traceCapable": true,
	                    "name": "com.lagou.entity.mobile.MobilePosition"
	                },
	                "positionId": 3765291,
	                "positionName": "大数据开发工程师",
	                "city": "北京",
	                "createTime": "今天 10:58",
	                "salary": "15k-20k",
	                "companyId": 6692,
	                "companyLogo": "i/image/M00/60/BB/Cgp3O1f6CDyAE8_OAAB8NF5CFa4180.png",
	                "companyName": "海云数据",
	                "companyFullName": "天津大海云科技有限公司"
	            },
	            {
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3879687,
					"positionName":"天猫店长",
					"city":"北京",
					"createTime":"今天 09:17",
					"salary":"10k-20k",
					"companyId":130264,
					"companyLogo":"i/image2/M00/06/8F/CgotOVnKGwCAXe2BAAA0Riy2ksc489.png",
					"companyName":"352空气净化器",
					"companyFullName":"北京三五二环保科技有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3871150,
					"positionName":"ios开发",
					"city":"淮安",
					"createTime":"今天 09:16",
					"salary":"6k-10k",
					"companyId":292400,
					"companyLogo":"i/image2/M00/24/92/CgoB5lobdhiAVO1CAABv1qyddRo933.jpg",
					"companyName":"同城享购",
					"companyFullName":"江苏思跑特网络科技有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3871176,
					"positionName":"java开发",
					"city":"淮安",
					"createTime":"今天 09:16",
					"salary":"6k-8k",
					"companyId":292400,
					"companyLogo":"i/image2/M00/24/92/CgoB5lobdhiAVO1CAABv1qyddRo933.jpg",
					"companyName":"同城享购",
					"companyFullName":"江苏思跑特网络科技有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3872822,
					"positionName":"服装批版师",
					"city":"深圳",
					"createTime":"今天 09:16",
					"salary":"6k-12k",
					"companyId":83442,
					"companyLogo":"image1/M00/39/46/Cgo8PFWoh2iAGKIRAABFPNzWG-E518.PNG?cc=0.7104756835712367",
					"companyName":"TOUCH",
					"companyFullName":"如斯（深圳）服饰有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3879218,
					"positionName":"硬件工程师",
					"city":"上海",
					"createTime":"今天 09:16",
					"salary":"15k-20k",
					"companyId":246971,
					"companyLogo":"i/image/M00/5D/F9/CgpFT1mTsSSAZhQzAABYVY9PuMc449.png",
					"companyName":"Vechain",
					"companyFullName":"上海唯链信息科技有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3879114,
					"positionName":"旅游顾问",
					"city":"郑州",
					"createTime":"今天 09:15",
					"salary":"3K-6K",
					"companyId":293338,
					"companyLogo":"i/image2/M00/25/92/CgotOVodGLeAX_gbAABYLYS90ww988.jpg",
					"companyName":"诚友假期",
					"companyFullName":"平遥诚友旅行社有限公司郑州分公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3879452,
					"positionName":"旅游计调",
					"city":"郑州",
					"createTime":"今天 09:15",
					"salary":"3k-5k",
					"companyId":293338,
					"companyLogo":"i/image2/M00/25/92/CgotOVodGLeAX_gbAABYLYS90ww988.jpg",
					"companyName":"诚友假期",
					"companyFullName":"平遥诚友旅行社有限公司郑州分公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3873292,
					"positionName":"外套设计师",
					"city":"广州",
					"createTime":"今天 09:14",
					"salary":"6k-8k",
					"companyId":22069,
					"companyLogo":"image1/M00/00/29/Cgo8PFTUXGqAfJXHAADP2fEqLS0921.jpg",
					"companyName":"骆驼服饰",
					"companyFullName":"广东骆驼服饰有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},"positionId":3871074,"positionName":"产品助理","city":"深圳","createTime":"今天 09:14","salary":"10k-15k","companyId":129639,"companyLogo":"i/image/M00/2C/41/Cgp3O1c5JN6AMvq0AAALBMOmNzw622.jpg","companyName":"优加互联","companyFullName":"深圳市优加互联科技有限公司"},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3876183,
					"positionName":"商务BD经理",
					"city":"广州",
					"createTime":"今天 09:14",
					"salary":"6k-12k",
					"companyId":51472,
					"companyLogo":"i/image/M00/8D/63/Cgp3O1iG0JiAIdntAAAtivqUeaA44.jpeg",
					"companyName":"车主无忧",
					"companyFullName":"广州小迈网络科技有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3874356,
					"positionName":"UI-UE设计师",
					"city":"北京",
					"createTime":"今天 09:13",
					"salary":"8k-15k",
					"companyId":57353,
					"companyLogo":"i/image/M00/02/D4/CgqKkVad8jiAIDHrAAGK0MmIVNs370.jpg",
					"companyName":"中移在线服务有限公司",
				"companyFullName":"中移在线服务有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3874386,
					"positionName":"UI-UE设计师",
					"city":"郑州",
					"createTime":"今天 09:13",
					"salary":"7k-14k",
					"companyId":57353,
					"companyLogo":"i/image/M00/02/D4/CgqKkVad8jiAIDHrAAGK0MmIVNs370.jpg",
					"companyName":"中移在线服务有限公司",
					"companyFullName":"中移在线服务有限公司"},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3880677,
					"positionName":"Python数据专家",
					"city":"广州",
					"createTime":"今天 09:13",
					"salary":"15k-25k",
					"companyId":16831,
					"companyLogo":"i/image/M00/02/AB/CgqKkVaXX_6AaLKaAAAX52Kvjjg750.jpg",
					"companyName":"武汉佰钧成技术有限公司",
				"companyFullName":"武汉佰钧成技术有限责任公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3875982,
					"positionName":"高级运维工程师",
					"city":"北京",
					"createTime":"今天 09:12",
					"salary":"10k-15k",
					"companyId":3546,
					"companyLogo":"image1/M00/00/09/Cgo8PFTUWBKACRFoAACK5d6otd4230.jpg",
					"companyName":"光宇游戏",
					"companyFullName":"北京光宇在线科技有限责任公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3858119,
					"positionName":"项目助理",
					"city":"北京",
					"createTime":"今天 09:12",
					"salary":"5k-7k",
					"companyId":3546,
					"companyLogo":"image1/M00/00/09/Cgo8PFTUWBKACRFoAACK5d6otd4230.jpg",
					"companyName":"光宇游戏",
					"companyFullName":"北京光宇在线科技有限责任公司"
				},
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3906472,
			        "positionName":"硬件生态渠道部-UE设计师",
			        "city":"北京",
			        "createTime":"今天 19:38",
			        "salary":"15k-30k",
			        "companyId":1575,
			        "companyLogo":"i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png",
			        "companyName":"百度",
			        "companyFullName":"百度在线网络技术（北京）有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3874710,
			        "positionName":"软件测试工程师",
			        "city":"重庆",
			        "createTime":"今天 19:36",
			        "salary":"4K-6K",
			        "companyId":173977,
			        "companyLogo":"i/image/M00/A8/2F/CgqKkViuiL6AKeIJAAAEcHOiQD0978.png",
			        "companyName":"和贯科技",
			        "companyFullName":"重庆和贯科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3882924,
			        "positionName":"UED",
			        "city":"上海",
			        "createTime":"今天 19:14",
			        "salary":"7k-14k",
			        "companyId":60624,
			        "companyLogo":"i/image/M00/BE/FE/Cgp3O1jPSHeABcBRAABfjr6nQvg268.png",
			        "companyName":"南瓜车",
			        "companyFullName":"上海苍豆网络技术有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3884302,
			        "positionName":"前端实习生",
			        "city":"北京",
			        "createTime":"今天 18:58",
			        "salary":"2k-4k",
			        "companyId":73184,
			        "companyLogo":"i/image/M00/BF/F5/CgqKkVjRGvuAeBNHAAA9vND4p-U397.jpg",
			        "companyName":"薪人薪事",
			        "companyFullName":"企家有道网络技术（北京）有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3907976,
			        "positionName":"英语运营",
			        "city":"北京",
			        "createTime":"今天 18:58",
			        "salary":"8k-15k",
			        "companyId":112375,
			        "companyLogo":"i/image3/M00/01/1D/Cgq2xlpcIp6AHRXGAAAhNO1VOOE588.png",
			        "companyName":"伴鱼口语",
			        "companyFullName":"北京读我科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3878812,
			        "positionName":"链家总部房产实习生",
			        "city":"北京",
			        "createTime":"今天 18:56",
			        "salary":"5k-9k",
			        "companyId":189461,
			        "companyLogo":"i/image/M00/0C/AF/CgpEMljkoGWAGFI0AAAfGoNNwg8875.jpg",
			        "companyName":"北京链家",
			        "companyFullName":"北京链家房地产经纪有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3879304,
			        "positionName":"商务拓展",
			        "city":"北京",
			        "createTime":"今天 18:51",
			        "salary":"8k-15k",
			        "companyId":144451,
			        "companyLogo":"i/image/M00/BD/23/Cgp3O1jJZGOAZ7gEAAByNNhqe9A961.jpg",
			        "companyName":"Plum",
			        "companyFullName":"致美生活（北京）科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3907827,
			        "positionName":"财务专员",
			        "city":"上海",
			        "createTime":"今天 18:47",
			        "salary":"6k-10k",
			        "companyId":228279,
			        "companyLogo":"i/image/M00/50/46/CgpFT1l4PqaAU2-5AAA7e3zTweQ570.png",
			        "companyName":"上海应应互联网",
			        "companyFullName":"上海应应互联网科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3877377,
			        "positionName":"游戏策划",
			        "city":"广州",
			        "createTime":"今天 18:47",
			        "salary":"3k-6k",
			        "companyId":3882,
			        "companyLogo":"image1/M00/00/0A/CgYXBlTUWBSAZ7jLAAByFxguLS4914.jpg",
			        "companyName":"游戏谷",
			        "companyFullName":"北京游戏谷信息技术有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3875734,
			        "positionName":"数据运营经理",
			        "city":"深圳",
			        "createTime":"今天 18:46",
			        "salary":"15k-25k",
			        "companyId":40459,
			        "companyLogo":"i/image2/M00/1B/63/CgotOVoCv-eAPNQcAARRTfkzqqo936.png",
			        "companyName":"SenseTime",
			        "companyFullName":"北京市商汤科技开发有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3906739,
			        "positionName":"销售BD(杭州）",
			        "city":"杭州",
			        "createTime":"今天 18:46",
			        "salary":"15k-20k",
			        "companyId":542,
			        "companyLogo":"i/image/M00/03/F6/Cgp3O1bFJYaAU9eLAABG1t1Bos4569.jpg",
			        "companyName":"婚礼纪",
			        "companyFullName":"杭州火烧云科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3907638,
			        "positionName":"培训专员",
			        "city":"上海",
			        "createTime":"今天 18:39",
			        "salary":"8k-12k",
			        "companyId":138115,
			        "companyLogo":"i/image/M00/5D/40/CgpEMlmKuxGAJB2sAACHf53zQcM399.png",
			        "companyName":"巨人网络",
			        "companyFullName":"上海巨人网络科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3877032,
			        "positionName":"采购经理（东南亚）",
			        "city":"上海",
			        "createTime":"今天 18:38",
			        "salary":"8k-12k",
			        "companyId":94027,
			        "companyLogo":"i/image/M00/3F/27/Cgp3O1d2SOuAT-c5AAAYuH9dquI701.png",
			        "companyName":"斑马旅游",
			        "companyFullName":"上海歌晨信息技术有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3876970,
			        "positionName":"采购经理（泰国）",
			        "city":"上海",
			        "createTime":"今天 18:38",
			        "salary":"8k-15k",
			        "companyId":94027,
			        "companyLogo":"i/image/M00/3F/27/Cgp3O1d2SOuAT-c5AAAYuH9dquI701.png",
			        "companyName":"斑马旅游",
			        "companyFullName":"上海歌晨信息技术有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3882939,
			        "positionName":"用户运营",
			        "city":"南京",
			        "createTime":"今天 18:37",
			        "salary":"6k-12k",
			        "companyId":195188,
			        "companyLogo":"i/image2/M00/35/61/CgotOVpEhxSAEBRnAAA1F5bPcSQ044.png",
			        "companyName":"南京钜派网络科技",
			        "companyFullName":"南京钜派网络科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3877091,
			        "positionName":"旅游产品经理（泰国）",
			        "city":"上海",
			        "createTime":"今天 18:38",
			        "salary":"8k-15k",
			        "companyId":94027,
			        "companyLogo":"i/image/M00/3F/27/Cgp3O1d2SOuAT-c5AAAYuH9dquI701.png",
			        "companyName":"斑马旅游",
			        "companyFullName":"上海歌晨信息技术有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3879031,
			        "positionName":"高级java工程师",
			        "city":"北京",
			        "createTime":"今天 18:35",
			        "salary":"25k-45k",
			        "companyId":39934,
			        "companyLogo":"image1/M00/33/F0/CgYXBlWVHo2AJ2kfAADcOU-43sg621.jpg",
			        "companyName":"每日优鲜",
			        "companyFullName":"北京每日优鲜电子商务有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3881856,
			        "positionName":"商务合作专员/助理(BD)",
			        "city":"上海",
			        "createTime":"今天 18:34",
			        "salary":"6k-8k",
			        "companyId":116690,
			        "companyLogo":"i/image/M00/08/83/Cgp3O1bQC5CARls2AABKL6_oOgk512.jpg",
			        "companyName":"格林豪泰",
			        "companyFullName":"格林豪泰酒店（中国）有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3881301,
			        "positionName":"日语商拓专员",
			        "city":"上海",
			        "createTime":"今天 18:31",
			        "salary":"6k-10k",
			        "companyId":6636,
			        "companyLogo":"image1/M00/00/0E/Cgo8PFTUWCWAOQHbAABtwKGNZK8276.png",
			        "companyName":"携程",
			        "companyFullName":"携程计算机技术（上海）有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3881299,
			        "positionName":"商务运营主管",
			        "city":"上海",
			        "createTime":"今天 18:31",
			        "salary":"7k-12k",
			        "companyId":6636,
			        "companyLogo":"image1/M00/00/0E/Cgo8PFTUWCWAOQHbAABtwKGNZK8276.png",
			        "companyName":"携程",
			        "companyFullName":"携程计算机技术（上海）有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3873581,
			        "positionName":"风控策略分析师",
			        "city":"上海",
			        "createTime":"今天 18:28",
			        "salary":"20k-30k",
			        "companyId":219252,
			        "companyLogo":"i/image/M00/7E/F8/CgpEMlpN2aCAC3zzAAEWb78flQY855.jpg",
			        "companyName":"融慧金科",
			        "companyFullName":"融慧金科金融服务外包（北京）有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3873638,
			        "positionName":"数据挖掘/模型开发工程师",
			        "city":"上海",
			        "createTime":"今天 18:28",
			        "salary":"15k-30k",
			        "companyId":219252,
			        "companyLogo":"i/image/M00/7E/F8/CgpEMlpN2aCAC3zzAAEWb78flQY855.jpg",
			        "companyName":"融慧金科",
			        "companyFullName":"融慧金科金融服务外包（北京）有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3877995,
			        "positionName":"IOS SDK开发工程师",
			        "city":"北京",
			        "createTime":"今天 18:27",
			        "salary":"10k-20k",
			        "companyId":43402,
			        "companyLogo":"image1/M00/00/6D/CgYXBlTUXYOAZeliAABglqg5dMo519.jpg",
			        "companyName":"微赢互动",
			        "companyFullName":"北京微赢互动科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3906211,
			        "positionName":"安卓底层驱动开发工程师",
			        "city":"成都",
			        "createTime":"今天 18:27",
			        "salary":"7k-12k",
			        "companyId":71190,
			        "companyLogo":"image1/M00/27/F5/CgYXBlVdRGKAftyhAACPur_EXh0336.jpg",
			        "companyName":"平凡谷",
			        "companyFullName":"成都平凡谷科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3880957,
			        "positionName":"AS3开发工程师",
			        "city":"广州",
			        "createTime":"今天 18:24",
			        "salary":"13k-25k",
			        "companyId":7520,
			        "companyLogo":"i/image2/M00/29/49/CgotOVomb4eATe7JAAAuECBvj5w683.png",
			        "companyName":"广东三维家信息科技有限公司",
			        "companyFullName":"广东三维家信息科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3880966,
			        "positionName":"高级.net开发工程师",
			        "city":"广州",
			        "createTime":"今天 18:24",
			        "salary":"18k-24k",
			        "companyId":7520,
			        "companyLogo":"i/image2/M00/29/49/CgotOVomb4eATe7JAAAuECBvj5w683.png",
			        "companyName":"广东三维家信息科技有限公司",
			        "companyFullName":"广东三维家信息科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3883989,
			        "positionName":"销售运营专员（南京）",
			        "city":"南京",
			        "createTime":"今天 18:22",
			        "salary":"4k-8k",
			        "companyId":34683,
			        "companyLogo":"i/image/M00/34/6A/CgpEMlk6ZmmAYZeaAAAb73aIfTY754.png",
			        "companyName":"买单侠",
			        "companyFullName":"上海秦苍信息科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3884041,
			        "positionName":"驻店运营（南京）",
			        "city":"南京",
			        "createTime":"今天 18:22",
			        "salary":"4k-8k",
			        "companyId":34683,
			        "companyLogo":"i/image/M00/34/6A/CgpEMlk6ZmmAYZeaAAAb73aIfTY754.png",
			        "companyName":"买单侠",
			        "companyFullName":"上海秦苍信息科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3907250,
			        "positionName":"h5开发工程师",
			        "city":"广州",
			        "createTime":"今天 18:18",
			        "salary":"15k-20k",
			        "companyId":177809,
			        "companyLogo":"i/image/M00/B5/94/CgqKkVi-fPaAKCF8AAAZUYmHMVM388.png",
			        "companyName":"彩猫科技",
			        "companyFullName":"广州彩猫网络科技有限公司"
			    },
			    {
			        "logger":{
			            "traceCapable":true,
			            "name":"com.lagou.entity.mobile.MobilePosition"
			        },
			        "positionId":3907227,
			        "positionName":"游戏策划",
			        "city":"广州",
			        "createTime":"今天 18:18",
			        "salary":"7k-13k",
			        "companyId":177809,
			        "companyLogo":"i/image/M00/B5/94/CgqKkVi-fPaAKCF8AAAZUYmHMVM388.png",
			        "companyName":"彩猫科技",
			        "companyFullName":"广州彩猫网络科技有限公司"
			    }
	        ]
	})
})

app.post("/api/city",function(req,res){
	res.json({
		code:0,
		list:[
				{"cityList":["北京","上海","广州","深圳","成都","杭州"],
					"name":"热门城市","nameStr":"热门城市"},
				{"cityList":["保定","北海","北京","包头","滨州","长春","成都","常德","承德","重庆","长沙","常州","沧州","郴州","滁州","东莞","大连","大理","德阳","东营","德州","达州","佛山","阜阳","福州"],"name":"","nameStr":"ABCDEF"},
				{"cityList":["桂林","贵阳","广州","赣州","淮安","邯郸","哈尔滨","合肥","黄冈","呼和浩特","海口","衡阳","河源","杭州","惠州","湖州","菏泽","金华","江门","荆门","济南","济宁","嘉兴","荆州"],"name":"","nameStr":"GHIJ"},
				{"cityList":["昆明","廊坊","丽水","洛阳","临沂","连云港","兰州","柳州","泸州","马鞍山","绵阳","梅州","宁波","南昌","南充","南京","南宁","南通","南阳"],"name":"","nameStr":"KLMN"},
				{"cityList":["莆田","青岛","黔东南","秦皇岛","清远","泉州","日照"],"name":"","nameStr":"OPQR"},
				{"cityList":["韶关","上海","石家庄","上饶","汕头","绍兴","沈阳","三亚","深圳","苏州","泰安","天津","唐山","太原","台州","泰州"],"name":"","nameStr":"STUV"},
				{"cityList":["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","香港特别行政区","厦门","西宁","新乡","信阳","襄阳","咸阳","徐州","银川","宜昌","盐城","营口","烟台","岳阳","扬州","淄博","珠海","镇江","湛江","肇庆","中山","遵义","郑州","漳州","株洲","枣庄"],"name":"","nameStr":"WXYZ"}				
				]
	})
});

app.post('/city',function(req,res){
	res.json({
		code:0,
		msglist:[
			{"常用":[
				{code:"0086",city:"中国"},
				{code:"00852",city:"中国香港"},
				{code:"00886",city:"中国台湾"},
				{code:"00853",city:"中国澳门"},
				{code:"001",city:"美国"},
			]},
			{"A":[
				{code:"0061",city:"澳大利亚"},
				{code:"00853",city:"中国澳门"},
			]},
			{"B":[
				{code:"0055",city:"巴西"}
			]},
			{"D":[
				{code:"0049",city:"德国"}
			]},
			{"E":[
				{code:"007",city:"俄罗斯"}
			]},
			{"F":[
				{code:"0033",city:"法国"}
			]},
			{"H":[
				{code:"0082",city:"韩国"}
			]},
			{"J":[
				{code:"001",city:"加拿大"}
			]},
			{"M":[
				{code:"0060",city:"马来西亚"},
				{code:"001",city:"美国"}
			]},
			{"T":[
				{code:"00886",city:"中国台湾"},
				{code:"0066",city:"泰国"}
			]},
			{"X":[
				{code:"00852",city:"中国香港"},
				{code:"0065",city:"新加坡"}
			]},
			{"Y":[
				{code:"0091",city:"印度"},
				{code:"0044",city:"英国"}
			]},
			{"Z":[
				{code:"0086",city:"中国"}
			]}
		]
	})
});

app.post('/api/register',function(req,res){
	var name = req.body;
	res.json({
		code:0,
		msg:"ok!",
		na:name
	})
});

app.post('/api/login',function(req,res){
	res.json({
		code:0,
		msg:"ok!",
		na:name
	})
});
app.listen(8848)