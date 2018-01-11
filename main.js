      
            let isloaded = false;
            $(document).ready(function() {

                isloaded= true;
                var table=  $('#sampleTable').DataTable( {
                    /**
                 * No filtering input control: the serach input is removed
                 */
                    "dom": 'lrtip',
                    /**
                   * Disable user ability to change number of records per page:
                   */
                    "lengthChange": false,
                    data: dataSet,
                    columns: [
                        { title: "Name" },
                        { title: "Position" },
                        { title: "Office" },
                        { title: "Extn." },
                        { title: "Start date" },
                        { title: "Salary" }
                    ]

                } );

                $('.datepicker').datepicker({
                    format:'yyyy/mm/dd'
                });
                $('.input-daterange input').each(function() {
                    $(this).datepicker(
                        {
                            format:'yyyy/mm/dd'
                        });
                });
                $('.searchinput').on('keyup', function () {
                    globalSearch();
                });


                $('.searchinput').click(function()
                                        {
                    globalSearch();
                  
                })

                $('.searchinput').change( function() {
                    globalSearch();
                } );


                function globalSearch()
                {
                    var startdate= $('#searchdate').val();
                    var officeselect= $('#officeselect').val();
                    var positionselect= $('#positionselect').val();
                    var searchinput = $('#searchstring').val();
                    var searchstring='';
                    if(searchinput)
                        searchstring = searchstring + searchinput + ' ';
                    if(startdate)
                        searchstring = searchstring + startdate + ' ';
                    if(officeselect)
                        searchstring = searchstring + officeselect + ' ';
                    if(positionselect)
                        searchstring = searchstring + positionselect + ' ';

                    $('#sampleTable').DataTable().search(
                        searchstring

                    ).draw();

                }

           
              
            } );
    