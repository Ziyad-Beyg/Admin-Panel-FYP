import { useContext, useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";



import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import ImageGallery from "../../components/ImageGallery";
import VideoGallery from "../../components/VideoGallery";
import VendorProfile from "../../components/VendorProfile/VendorProfile";
import { GlobalContext } from "../../ContextApi/ContextApi";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  // const {data, setData} = useContext(GlobalContext)
  let data = JSON.parse(localStorage.getItem("Vendor"));

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  console.log(data)
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
    <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
    <Box
      className="overflowDiv"
      overflow="scroll"
      height="90vh"
      // border="1px solid red"
    >
      {/*<Box display="flex" justifyContent="space-between"> */}
      {/* CALENDAR SIDEBAR
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box> */}

      <VendorProfile user={data} /> 

      <Box ml="40px" mt="40px">
        <Header title="VENDOR NIC" subtitle="Image of Vendor NIC " />
      </Box>
      <div className="image-gallery" > 
      <img src={data.nicImage} alt="NIC Image" />
      </div>

      <Box ml="40px" mt="40px">
        <Header title="IMAGE GALLERY" subtitle="List of Vendor Images " />
      </Box>
      <ImageGallery />

      
      

      <Box ml="40px" mt="40px">
        <Header title="VIDEO GALLERY" subtitle="List of Vendor Videos " />
      </Box>
      <VideoGallery />

      {/* CALENDAR */}
      {/* <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box> */}
    </Box>
    </main>
    </>
  );
};

export default Calendar;





