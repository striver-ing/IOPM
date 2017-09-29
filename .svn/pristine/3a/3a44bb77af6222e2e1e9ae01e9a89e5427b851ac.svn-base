drop table tab_iopm_clues
commit
create table tab_iopm_clues(
   id number(11) primary key,
   name varchar2(64),
   keyword1 varchar2(64),
   keyword2 varchar2(64),
   keyword3 varchar2(64),
   weight number(11),
   first_classify_id number(11),
   total_msg number(11),
   today_msg number(11),
   update_time date,
   record_time date default sysdate,
   second_classify_id number(11)
  )  
create table tab_iopm_first_clues_classify(
   first_classify_id number(11) primary key,
   first_classify varchar2(64),
   zero_id number(11)
 )
create table tab_iopm_second_clues_classify(
   second_classify_id number(11) primary key,
   second_classify varchar2(64),
   first_classify_id number(11) 
 )  
 
create table tab_iopm_zero_clues_classify(
   zero_id number(11) primary key,
   zero_name varchar2(64)
)
commit


select * from tab_iopm_clues t join tab_iopm_second_clues_classify p on(t.second_classify_id=p.second_classify_id)
      join tab_iopm_first_clues_classify i on(p.first_classify_id=i.first_classify_id) join tab_iopm_zero_clues_classify z on(i.zero_id=z.zero_id)

insert into   tab_iopm_zero_clues_classify values(4,'科技')
update tab_iopm_zero_clues_classify set zero_name='人民文化' where zero_id=2
select * from tab_iopm_zero_clues_classify
insert into   tab_iopm_first_clues_classify values(25,'sss',1)  
delete from  tab_iopm_clues
delete from  tab_iopm_second_clues_classify
delete from  tab_iopm_first_clues_classify
select * from  tab_iopm_clues
create sequence TAB_IOPM_SECONDCLASSIFY_SEQ start with 1
select * from tab_iopm_first_clues_classify
select * from  tab_iopm_second_clues_classify s join tab_iopm_first_clues_classify f on(s.first_classify_id=f.first_classify_id) where first_classify='歌手'
 select c.first_classify,c.first_classify_id, count(*)  count from TAB_IOPM_CLUES t, TAB_IOPM_FIRST_CLUES_CLASSIFY c
        where c.first_classify_id = t.first_classify_id and c.zero_id=2
        group by c.first_classify, c.first_classify_id 
        
 select * from tab_iopm_first_clues_classify where first_classify_id!=44      
 select * from tab_iopm_second_clues_classify where second_classify_id!=22 