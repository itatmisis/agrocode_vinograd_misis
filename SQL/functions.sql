CREATE AGGREGATE median(numeric) (
  SFUNC=array_append,
  STYPE=numeric[],
  FINALFUNC=_final_median,
  INITCOND='{}'
);

CREATE OR REPLACE FUNCTION array_greatest(anyarray)
RETURNS anyelement
LANGUAGE SQL
AS $$
  SELECT max(elements) FROM unnest($1) elements
$$;

CREATE OR REPLACE FUNCTION array_lowest(anyarray)
RETURNS anyelement
LANGUAGE SQL
AS $$
  SELECT min(elements) FROM unnest($1) elements
$$;
