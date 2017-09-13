program SearchRndElementInRndArray;
uses crt;
const N = 10;
var
  a: array [1..N] of integer;
  searchNumber: integer;
  isFound: boolean;
  i: integer;
begin
  randomize;

for i := 1 to N do 
  begin
    a[i] := Random(15);
  end;
  
writeln('Filled random array: ');
for i := 1 to N do
  begin
    write(a[i], ' ');
  end;  
  
writeln;  
 
searchNumber := Random(15);
 
isFound := False;
for i := 1 to N do
  begin
    if a[i] = searchNumber then 
      begin
        IsFound := True;
        break;
      end;
  end;
 
if isFound then
  begin
    writeln('Element ', searchNumber, ' is found!');
  end  
else
  begin
    writeln('Element ', searchNumber, ' not found');
  end;  
end.