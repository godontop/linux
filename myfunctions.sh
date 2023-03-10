findmax() {
	ls -AQ |xargs du -sh |sort -h
}

findmaxroot() {
	cd /
	ls -AQ |egrep -v "proc|run" |xargs du -sh |sort -h
	cd - >/dev/null
}

reset_broken_terminal() {
    print '\e[0m\e(B\e)0\017\e[?5l\e7\e[0;0r\e8'
}
