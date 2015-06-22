var persons = new Map();

function Person( _name, _sex )
{
	this.name = _name;
	this.sex = _sex;
	persons.set( this.name, this );
}

function SetPersons()
{
	var jz = new Person( '贾政', 'male');
	var wfr = new Person( '王夫人', 'female');
	var jby = new Person( '贾宝玉', 'male');
	var xym = new Person( '薛姨妈', 'female');
	var xbc = new Person( '薛宝钗', 'female');
}

var validRelations = [
	 'husband-wife',
	 'father-child',
	 'mother-child',
	 'sibling-elder'
	 ];

function SetRelation( name1, rel, name2 )
{
	var p1 = persons.get( name1 );
	var p2 = persons.get( name2 );
	switch ( rel ) {
	case 'husband-wife':
		p1.wife = name2;
		p2.husband = name1;
		break;
	case 'father-child':
		if( p1.children == undefined || ! (p1.children instanceof Array) ) {
			p1.children = [];
		}
		p1.children.push( name2 );
		p2.father = name1;
		break;
	case 'mother-child':
		if( p1.children == undefined || ! (p1.children instanceof Array) ) {
			p1.children = [];
		}
		p1.child = name2;
		p2.mother = name1;
		break;
	case 'sibling-elder':
		p1.younger = name2;
		p2.elder = name1;
		break;
	}
}
	 
function Family( father, mother )
{
	this.father = father;
	this.mother = mother;
	this.children = function () {
		var head = ( this.father != undefined ) ? this.father : this.mother;
		if( head.children == undefined || ! (head.children instanceof Array) )
			return undefined;
		return head.children;
	};
}

SetPersons();
SetRelation( '贾政', 'husband-wife', '王夫人' );
SetRelation( '贾政', 'father-child', '贾宝玉' );	
SetRelation( '王夫人', 'mother-child', '贾宝玉' );	
SetRelation( '薛姨妈', 'mother-child', '薛宝钗' );
SetRelation( '贾宝玉', 'husband-wife', '薛宝钗' );
	
var family1 = new Family( persons.get('贾政'), persons.get('王夫人') );
var family2 = new Family( undefined, persons.get('薛姨妈') );
var family3 = new Family( persons.get('贾宝玉'), persons.get('薛宝钗') );
