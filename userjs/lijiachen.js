  
function SetPersons()
{
    var ljc = new Person( '李嘉诚', 'male' );
	var zmy = new Person( '庄月明', 'female');
	var zja = new Person( '庄静庵', 'male');
	var zbq = new Person( '庄碧琴', 'female');
	var lzj = new Person( '李泽钜', 'male');
	var lzk = new Person( '李泽楷', 'male');
	var lyj = new Person( '李云经', 'male');
	var ljz = new Person( '李嘉昭', 'male');
	var lsh = new Person( '李素华', 'female');

	var wfx = new Person( '王富信', 'female');
	var lyn = new Person( '李燕宁', 'female');
	var cn = new Person( '次女', 'female');
	var sn = new Person( '三女', 'female');
	var zs = new Person( '男孙', 'male');

	var lls = new Person( '梁洛施', 'female');
	var lcz = new Person( '李长治', 'male');
	var cn1 = new Person( '次男', 'male');
	var sn1 = new Person( '三男', 'male');

    var zsp = new Person( '庄世平', 'male')
}

function SetRelations()
{
	SetRelation( '李嘉诚', 'husband-wife', '庄月明' );
	SetRelation( '庄静庵', 'father-child', '庄月明' );	
	SetRelation( '庄碧琴', 'mother-child', '李嘉诚' );	
	SetRelation( '庄月明', 'mother-child', '李泽钜' );
	SetRelation( '庄月明', 'mother-child', '李泽楷' );
	SetRelation( '李云经', 'father-child', '李嘉诚' );	
	SetRelation( '李云经', 'father-child', '李嘉昭' );	
	SetRelation( '李云经', 'father-child', '李素华' );	
	SetRelation( '庄碧琴', 'sibling-elder', '庄静庵' );
}

SetPersons();
SetRelations();

var jz = '李嘉诚';

var m = new Point(100, 100);
var shift1 = new Point(100, 250 );
shift1.Add(m);
new Subject('李嘉诚', new Point( 75.76, 41.35 ), shift1);
new Subject('庄月明', new Point( 208.36, 35.72 ), shift1);
new Subject('李泽钜', new Point( 79.28, 134.21 ), shift1);
new Subject('李泽楷', new Point( 190.09, 134.21 ), shift1);
new Subject('庄碧琴', new Point( 61.71, -39.25 ), shift1);
new Subject('庄静庵', new Point( 164.09, -39.25 ), shift1);
new Subject('李云经', new Point( -2.02, -43.47 ), shift1);
new Subject('李嘉昭', new Point( -40.18, 46.97 ), shift1);
new Subject('李素华', new Point( -49.42, -6.93 ), shift1);

new Subject('王富信', new Point( -7.96, 127.89 ), shift1);
new Subject('李燕宁', new Point( -58.56, 173.67 ), shift1);
new Subject('次女', new Point( -19.21, 212.32 ), shift1);
new Subject('三女', new Point( 43.26, 220.05 ), shift1);
new Subject('男孙', new Point( 102.77, 204.59 ), shift1);

new Subject('梁洛施', new Point( 265.77, 131.4 ), shift1);
new Subject('李长治', new Point( 171.82, 191.07 ), shift1);
new Subject('次男', new Point( 225.71, 182.64 ), shift1);
new Subject('三男', new Point( 278.9, 191.78 ), shift1);

var ljcF = new StarFamily( 'tree', 2, '李嘉诚', '庄月明', '李泽钜', '李泽楷' );
var zjaF = new StarFamily( 'tree', 3, '庄静庵', '庄月明' );
var ljyF = new StarFamily( 'tree', 4, '李云经', '庄碧琴', '李嘉诚', '李嘉昭', '李素华' );
var zF = new StarFamily( 'tree', 5, '庄碧琴', '庄静庵' );
var lzjF = new StarFamily( 'tree', 5, '李泽钜', '王富信', '李燕宁', '次女', '三女', '男孙' );
var lzkF = new StarFamily( 'tree', 5, '李泽楷', '梁洛施', '李长治', '次男', '三男' );
