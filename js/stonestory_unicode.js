  
function SetPersons()
{
	var jz = new Person( '贾政', 'male');
	var wfr = new Person( '王夫人', 'female');
	var jby = new Person( '贾宝玉', 'male');
	var xym = new Person( '薛姨妈', 'female');
	var xbc = new Person( '薛宝钗', 'female');
	var jds = new Person( '贾代善', 'male');
	var jm = new Person( '贾母', 'female');
}

function SetRelations()
{
	SetRelation( '贾政', 'husband-wife', '王夫人' );
	SetRelation( '贾政', 'father-child', '贾宝玉' );	
	SetRelation( '王夫人', 'mother-child', '贾宝玉' );	
	SetRelation( '薛姨妈', 'mother-child', '薛宝钗' );
	SetRelation( '贾宝玉', 'husband-wife', '薛宝钗' );
	SetRelation( '贾代善', 'husband-wife', '贾母' );
	SetRelation( '贾代善', 'father-child', '贾政' );	
	SetRelation( '贾母', 'mother-child', '贾政' );
}

SetPersons();
SetRelations();

var family1 = new Family( persons.get('贾政'), persons.get('王夫人') );
var family2 = new Family( undefined, persons.get('薛姨妈') );
var family3 = new Family( persons.get('贾宝玉'), persons.get('薛宝钗') );
var family4 = new Family( persons.get('贾代善'), persons.get('贾母') );
