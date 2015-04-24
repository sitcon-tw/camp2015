
var staffTaChi = [
	[
		"總召組" , "崑元、Clarence、Penny"
	],
	[
		"行政組" , "PineApple、零葉"
	],
	[
		"行銷組" , "小燁、Mouse"
	],
	[
		"活動組" , "莫風、味噌、泰泰、Queenie、糖萱、PCC"
	],
	[
		"隊輔組" , "JefferySAC"
	],
	[
		"財務組" , "蛋糕、魚丸"
	],
	[
		"課程組" , "哲安 (ZAL)、洋蔥、LegBone、靈夢、松鼠"
	],
	[
		"文創組" , "工藤、Sunset、Kelvin、安迪、秉蓉、筱蓉"
	],
	[
		"記錄組" , "大助"
	],
	[
		"美生組" , "阿貓、拔辣"
	]
];

var React = require('react');
var Table = require('../partial/table.jsx');

var StaffPage = React.createClass({
	render: function(){
		return (
			<div className="staffPage pageContainer">
				<div className="left">
					<h2>工作人員</h2>
					<Table applyClass={"staffPageTable"}>
						{staffTaChi}
					</Table>
					<img src={"img/boy.png"} />
				</div>
			</div>
		);
	}
});

React.render(
	<StaffPage />,
	document.getElementById('staffPage')
);